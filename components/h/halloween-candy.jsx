import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gb_iyob3n.css';
import '../../css/q/qwssc2bws.css';
import '../../css/u/ulbcltbax.css';
import '../../css/f/frwb-jbny.css';
import '../../css/k/kwhlrmbid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gb_iyob3n"/><path class="qwssc2bws"/><path class="ulbcltbax"/><path class="frwb-jbny"/><path class="kwhlrmbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:halloween-candy"} {...others} />);
}

export default Component;
