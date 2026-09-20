import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdqlpxbtz.css';
import '../../css/x/x4o5qsbyx.css';
import '../../css/n/nnute1z7l.css';
import '../../css/w/wtyigqbwe.css';
import '../../css/v/vuchhrbdc.css';
import '../../css/v/vdrkvnb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdqlpxbtz"/><path class="x4o5qsbyx"/><path class="nnute1z7l"/><path class="wtyigqbwe"/><path class="vuchhrbdc"/><path class="vdrkvnb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:delivery-package-2"} {...others} />);
}

export default Component;
