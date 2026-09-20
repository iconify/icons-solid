import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anmlihduy.css';
import '../../css/j/jd5857_ex.css';
import '../../css/i/id9lyr7mw.css';
import '../../css/i/i8h9686eq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="anmlihduy"/><path class="jd5857_ex"/><path class="id9lyr7mw"/><path class="i8h9686eq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle-7"} {...others} />);
}

export default Component;
