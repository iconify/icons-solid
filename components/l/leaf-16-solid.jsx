import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn0m4nbxn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xn0m4nbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:leaf-16-solid"} {...others} />);
}

export default Component;
