import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edfbzu34i.css';
import '../../css/g/gnew_18sz.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/qdpknuw4t.css';
import '../../css/u/u1f0yp2jn.css';
import '../../css/x/xio_otbwa.css';
import '../../css/r/r_lk4ubkj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="edfbzu34i"/><path class="gnew_18sz"/><g class="jn8qy4bru"><path class="qdpknuw4t"/><path class="u1f0yp2jn"/><path class="xio_otbwa"/><path class="r_lk4ubkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:boar"} {...others} />);
}

export default Component;
