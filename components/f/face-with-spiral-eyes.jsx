import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfo2ztank.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/d/d-mn5bc0o.css';
import '../../css/a/atjk8mbde.css';
import '../../css/n/nu1gr0hth.css';
import '../../css/k/khpmypvdb.css';
import '../../css/x/xgs51yznj.css';
import '../../css/d/d2hv79b3a.css';
import '../../css/f/fh7746n4k.css';
import '../../css/f/fjrr-rbdo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mfo2ztank"/><g class="x8poo_bjf"><circle class="d-mn5bc0o"/><g class="atjk8mbde"><path class="nu1gr0hth"/><path class="khpmypvdb"/><path class="xgs51yznj"/></g><g class="atjk8mbde"><path class="d2hv79b3a"/><path class="fh7746n4k"/><path class="fjrr-rbdo"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-spiral-eyes"} {...others} />);
}

export default Component;
