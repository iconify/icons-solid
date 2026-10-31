import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qexk9cb2u.css';
import '../../css/k/kqt9lz7-r.css';
import '../../css/z/zuk02cbcl.css';
import '../../css/j/js__32bol.css';
import '../../css/k/krdislk1u.css';
import '../../css/w/wasfsc5tu.css';
import '../../css/y/y937bccal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qexk9cb2u wm-shadow"/><path class="kqt9lz7-r"/><path class="zuk02cbcl"/><path class="js__32bol"/><path class="krdislk1u"/><path class="wasfsc5tu"/><path class="wm-shine y937bccal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:circle-dashed"} {...others} />);
}

export default Component;
