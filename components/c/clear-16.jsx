import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbc1sobbs.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bbc1sobbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:clear-16"} {...others} />);
}

export default Component;
