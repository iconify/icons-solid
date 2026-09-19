import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qab7_jb8p.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="qab7_jb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-1-bold"} {...others} />);
}

export default Component;
