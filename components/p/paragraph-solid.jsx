import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqhp__bvh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="hqhp__bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:paragraph-solid"} {...others} />);
}

export default Component;
