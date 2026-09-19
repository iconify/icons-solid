import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxpr3ub_o.css';
import '../../css/y/y8q0_obwr.css';
import '../../css/u/ub3xs8bzt.css';
import '../../css/o/o3gn41opk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxpr3ub_o"/><path class="y8q0_obwr"/><path class="ub3xs8bzt"/><path class="o3gn41opk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:send-limit-filled"} {...others} />);
}

export default Component;
