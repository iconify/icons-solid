import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dn5myfbwf.css';
import '../../css/c/ca5a0rbuv.css';
import '../../css/s/sltux9jbj.css';
import '../../css/s/s-dq4inme.css';
import '../../css/s/sij6f2sib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dn5myfbwf"/><path class="ca5a0rbuv"/><path class="sltux9jbj"/><path class="s-dq4inme"/><path class="sij6f2sib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-spanner"} {...others} />);
}

export default Component;
