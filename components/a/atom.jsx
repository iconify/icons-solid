import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxqac0bmw.css';
import '../../css/j/j2ghpnx_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxqac0bmw"/><circle class="j2ghpnx_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:atom"} {...others} />);
}

export default Component;
