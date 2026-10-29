import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp1ej38us.css';
import '../../css/w/whodxlb3j.css';
import '../../css/d/ddzpazbah.css';
import '../../css/y/y2fv1ebfu.css';
import '../../css/a/a5asv5d3z.css';
import '../../css/c/crj3e7ocm.css';
import '../../css/i/iy3dwlzlf.css';
import '../../css/n/nyp1c05nb.css';
import '../../css/w/wmiu62gwe.css';
import '../../css/b/betkp0gcl.css';
import '../../css/p/p_mclrirt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jp1ej38us wm-shadow"/><path class="whodxlb3j wm-k"/><path class="ddzpazbah wm-k"/><path class="wm-k y2fv1ebfu"/><path class="a5asv5d3z wm-k"/><path class="crj3e7ocm wm-k"/><path class="iy3dwlzlf wm-shine"/><path class="nyp1c05nb wm-a"/><path class="wm-a wmiu62gwe"/><path class="betkp0gcl wm-a"/><path class="p_mclrirt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:santa-hat"} {...others} />);
}

export default Component;
