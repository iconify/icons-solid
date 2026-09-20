import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkoasrbaf.css';
import '../../css/m/mse7f_lue.css';
import '../../css/d/d_x6tab4r.css';
import '../../css/z/z04drlb1l.css';
import '../../css/h/hgvne7zws.css';
import '../../css/j/j3hoeozfo.css';
import '../../css/v/v6vmjt5rj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hkoasrbaf"/><path class="mse7f_lue"/><path class="d_x6tab4r"/><g class="z04drlb1l"><path class="hgvne7zws"/><path class="j3hoeozfo"/><path class="v6vmjt5rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-bowing-medium-light-skin-tone"} {...others} />);
}

export default Component;
