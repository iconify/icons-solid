import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s989pofgt.css';
import '../../css/g/gsvrl7yuk.css';
import '../../css/h/h8_i6snvr.css';
import '../../css/f/f8et09b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s989pofgt"/><path class="gsvrl7yuk"/><circle class="h8_i6snvr"/><path class="f8et09b3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-prohibit"} {...others} />);
}

export default Component;
