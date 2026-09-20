import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q253iibin.css';
import '../../css/g/g64i7obiw.css';
import '../../css/f/figa1kb8x.css';
import '../../css/m/m4f_04qby.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q253iibin"/><path class="g64i7obiw"/><path class="figa1kb8x"/><path class="m4f_04qby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gas-station-fuel-petroleum"} {...others} />);
}

export default Component;
