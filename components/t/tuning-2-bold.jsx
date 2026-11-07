import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m03pku77p.css';
import '../../css/q/q7wq8kbpw.css';
import '../../css/m/mwt4lvgkq.css';
import '../../css/o/o_sbwqbmg.css';
import '../../css/i/i0_yjzb_q.css';
import '../../css/y/ych6edw5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m03pku77p"/><path class="q7wq8kbpw"/><path class="mwt4lvgkq"/><path class="o_sbwqbmg"/><path class="i0_yjzb_q"/><path class="ych6edw5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-bold"} {...others} />);
}

export default Component;
