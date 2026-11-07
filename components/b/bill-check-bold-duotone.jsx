import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0wezz6ua.css';
import '../../css/g/gjg-bzb4d.css';
import '../../css/u/u36hnrvrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0wezz6ua"/><path class="gjg-bzb4d"/><path class="u36hnrvrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-check-bold-duotone"} {...others} />);
}

export default Component;
