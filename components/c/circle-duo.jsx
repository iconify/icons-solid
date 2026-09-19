import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxgx5bc6m.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="vxgx5bc6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:circle-duo"} {...others} />);
}

export default Component;
