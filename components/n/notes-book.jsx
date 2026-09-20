import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qaahtebfg.css';
import '../../css/b/bta9jgiki.css';
import '../../css/p/pd1jdr0sq.css';
import '../../css/o/odj3qmith.css';
import '../../css/d/dy2u96bcw.css';
import '../../css/g/gyfb1ccoa.css';
import '../../css/w/w4rpg0b4z.css';
import '../../css/x/x1oltjbtm.css';
import '../../css/v/v15yerqrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qaahtebfg"/><path class="bta9jgiki"/><path class="pd1jdr0sq"/><path class="odj3qmith"/><path class="dy2u96bcw"/><path class="gyfb1ccoa"/><path class="w4rpg0b4z"/><path class="x1oltjbtm"/><path class="v15yerqrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:notes-book"} {...others} />);
}

export default Component;
