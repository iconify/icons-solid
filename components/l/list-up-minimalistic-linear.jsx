import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa_506f5h.css';
import '../../css/n/nmhvanepw.css';
import '../../css/f/f8edcu39k.css';
import '../../css/u/utbx9q75k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="nmhvanepw"/><path class="f8edcu39k"/><path class="utbx9q75k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-up-minimalistic-linear"} {...others} />);
}

export default Component;
