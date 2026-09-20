import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zf7z3sb0u.css';
import '../../css/o/o_nv49bra.css';
import '../../css/w/wek3qlbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zf7z3sb0u"/><path class="o_nv49bra"/><path class="wek3qlbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:format-painter"} {...others} />);
}

export default Component;
