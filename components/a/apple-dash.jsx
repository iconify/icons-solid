import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x06e9_b2c.css';
import '../../css/x/xg13r0bpx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x06e9_b2c"/><path class="xg13r0bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:apple-dash"} {...others} />);
}

export default Component;
