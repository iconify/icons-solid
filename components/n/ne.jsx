import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g1ircfbdz.css';
import '../../css/t/t41-nubaw.css';
import '../../css/t/t9xso2qjl.css';
import '../../css/d/dpsublimw.css';

const viewBox = {"width":301,"height":259};
const content = `<g class="ft5dv1b6b"><path class="g1ircfbdz"/><path class="t41-nubaw"/><path class="t9xso2qjl"/><circle class="dpsublimw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ne"} {...others} />);
}

export default Component;
