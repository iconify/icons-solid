import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn2yw126d.css';
import '../../css/z/zni6j6b_n.css';
import '../../css/z/z3ak3dbjh.css';
import '../../css/h/hkz0lxbgw.css';
import '../../css/a/arcgrbbmw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gn2yw126d"/><path class="zni6j6b_n"/><path class="z3ak3dbjh"/><path class="hkz0lxbgw"/><path class="arcgrbbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ox"} {...others} />);
}

export default Component;
