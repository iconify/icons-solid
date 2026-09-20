import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrl308cnj.css';
import '../../css/v/v6eu95bcb.css';
import '../../css/l/lgrzc-mov.css';
import '../../css/z/z27bxkbhm.css';
import '../../css/u/uco02_b4u.css';
import '../../css/g/g4japubmb.css';
import '../../css/g/gnmncxx0w.css';
import '../../css/b/bfwq_2b-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yrl308cnj"/><path class="v6eu95bcb"/><path class="lgrzc-mov"/><path class="z27bxkbhm"/><path class="uco02_b4u"/><path class="g4japubmb"/><path class="gnmncxx0w"/><path class="bfwq_2b-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:network-signal"} {...others} />);
}

export default Component;
