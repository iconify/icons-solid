import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2_v63kit.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c2_v63kit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:thumbs-down"} {...others} />);
}

export default Component;
