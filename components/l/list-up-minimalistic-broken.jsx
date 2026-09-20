import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nmhvanepw.css';
import '../../css/f/f8edcu39k.css';
import '../../css/u/utbx9q75k.css';
import '../../css/t/tnwts_9gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nmhvanepw"/><path class="f8edcu39k"/><path class="utbx9q75k"/><path class="tnwts_9gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-up-minimalistic-broken"} {...others} />);
}

export default Component;
