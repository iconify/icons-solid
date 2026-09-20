import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywu0qznay.css';
import '../../css/q/q62l7z_vw.css';
import '../../css/h/h-org7o4o.css';
import '../../css/e/ekxwpbcjs.css';
import '../../css/e/equ8s-64r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ywu0qznay"/><path class="q62l7z_vw"/><path class="h-org7o4o"/><path class="ekxwpbcjs"/><path class="equ8s-64r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:flower"} {...others} />);
}

export default Component;
