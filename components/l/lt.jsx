import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbuv__lpw.css';
import '../../css/w/w7mqji02y.css';
import '../../css/c/cimm1cbtr.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="bbuv__lpw"/><path class="w7mqji02y"/><path class="cimm1cbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lt"} {...others} />);
}

export default Component;
