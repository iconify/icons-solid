import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foqcwkxxx.css';
import '../../css/a/axc7lmbxf.css';
import '../../css/z/zx82qk7ah.css';
import '../../css/l/l2-cklbof.css';
import '../../css/g/gihbtmmuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="foqcwkxxx"/><path class="axc7lmbxf"/><path class="zx82qk7ah"/><path class="l2-cklbof"/><path class="gihbtmmuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-flash"} {...others} />);
}

export default Component;
