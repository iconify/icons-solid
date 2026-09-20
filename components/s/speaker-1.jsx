import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o1z2wccdo.css';
import '../../css/o/oq6o08blu.css';
import '../../css/k/kscen10md.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o1z2wccdo"/><path class="oq6o08blu"/><path class="kscen10md"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:speaker-1"} {...others} />);
}

export default Component;
