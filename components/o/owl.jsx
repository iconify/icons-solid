import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz5dxrb9c.css';
import '../../css/d/dv49fzpdk.css';
import '../../css/k/kiarm54_m.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/h/hjtdfnrch.css';
import '../../css/e/ehj3mcm7x.css';
import '../../css/z/zrz3ievtm.css';
import '../../css/k/kswnx2b7u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sz5dxrb9c"/><path class="dv49fzpdk"/><path class="kiarm54_m"/><g class="doj9dq_jg"><path class="hjtdfnrch"/><path class="ehj3mcm7x"/><path class="zrz3ievtm"/><path class="kswnx2b7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:owl"} {...others} />);
}

export default Component;
