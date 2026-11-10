import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p74anlbhw.css';
import '../../css/h/hpa71hn0a.css';
import '../../css/g/g1j1qqbnq.css';
import '../../css/m/mq9qmd3hi.css';
import '../../css/d/dnx147b0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p74anlbhw"/><circle class="hpa71hn0a"/><path class="g1j1qqbnq"/><path class="mq9qmd3hi"/><path class="dnx147b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-settings"} {...others} />);
}

export default Component;
