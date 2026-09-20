import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yavzacc3j.css';
import '../../css/m/mkamty2be.css';
import '../../css/g/ghs94nbec.css';
import '../../css/k/kdvk3ubvt.css';
import '../../css/b/b2fhmabhm.css';
import '../../css/b/btnne-b7c.css';
import '../../css/w/wptq49b-c.css';
import '../../css/a/adf05k6pl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yavzacc3j"/><path class="mkamty2be"/><path class="ghs94nbec"/><path class="kdvk3ubvt"/><path class="b2fhmabhm"/><g class="btnne-b7c"><path class="wptq49b-c"/><path class="adf05k6pl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:atom-bomb"} {...others} />);
}

export default Component;
