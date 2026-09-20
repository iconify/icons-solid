import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hsrj82bjj.css';
import '../../css/m/muj1xkb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hsrj82bjj"/><path class="muj1xkb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:graphic-template-website-ui"} {...others} />);
}

export default Component;
