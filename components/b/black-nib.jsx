import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ispkdxkej.css';
import '../../css/z/zwqmcz9ao.css';
import '../../css/f/f6rpl3myq.css';
import '../../css/c/cljh_vbco.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/a/aq_160bup.css';
import '../../css/l/l0gpb7t8q.css';
import '../../css/x/x5k70ibcs.css';
import '../../css/c/cvl72bc_m.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ispkdxkej"/><path class="zwqmcz9ao"/><path class="f6rpl3myq"/><circle class="cljh_vbco"/><g class="rpvb-o6bq"><path class="aq_160bup"/><path class="l0gpb7t8q"/><circle class="x5k70ibcs"/><path class="cvl72bc_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-nib"} {...others} />);
}

export default Component;
