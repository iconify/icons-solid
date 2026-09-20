import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/y/y-3e0yqgt.css';
import '../../css/n/nobrgtbws.css';
import '../../css/w/w9t_aghez.css';
import '../../css/l/lyxdkqbiv.css';
import '../../css/t/t5rocnbos.css';
import '../../css/f/fzox62bir.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><path class="y-3e0yqgt"/><path class="nobrgtbws"/></g><path class="w9t_aghez"/><path class="lyxdkqbiv"/><path class="t5rocnbos"/><path class="fzox62bir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-open-eyes-and-hand-over-mouth"} {...others} />);
}

export default Component;
