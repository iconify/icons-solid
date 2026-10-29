import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f31j-cpil.css';
import '../../css/d/d-jhw1bbl.css';
import '../../css/y/y7ke0gjgt.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/w/wylzqm4cr.css';
import '../../css/e/eglzkhc9b.css';
import '../../css/j/jrz_dhbzq.css';
import '../../css/f/favrasb5p.css';
import '../../css/d/dyvwl908c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f31j-cpil wm-k"/><path class="d-jhw1bbl wm-k"/><path class="wm-k y7ke0gjgt"/><path class="rjg00-qxz wm-shine"/><path class="wm-k wylzqm4cr"/><path class="eglzkhc9b wm-k"/><path class="jrz_dhbzq wm-k"/><path class="favrasb5p wm-shine"/><path class="dyvwl908c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-check-big"} {...others} />);
}

export default Component;
