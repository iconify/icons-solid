import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/n/nqa4dzbwt.css';
import '../../css/m/mlbz7kuae.css';
import '../../css/h/hhw1dwpuz.css';
import '../../css/o/oaqfex40p.css';
import '../../css/d/da8ml6hdu.css';

const viewBox = {"width":467.008,"height":46.548};
const content = `<g class="bi12bsetm"><g transform="translate(0 1.292)scale(3.69565)" class="l5y23ru5w"><path class="nqa4dzbwt"/><path class="mlbz7kuae"/><ellipse class="hhw1dwpuz"/></g><path class="oaqfex40p"/><path class="da8ml6hdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:monday-dark"} {...others} />);
}

export default Component;
