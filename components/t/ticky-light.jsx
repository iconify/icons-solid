import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-4uxpbxq.css';
import '../../css/c/cjzwyi8ka.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c-4uxpbxq"/><path class="cjzwyi8ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticky-light"} {...others} />);
}

export default Component;
