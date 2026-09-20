import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/ce6gc0-_s.css';
import '../../css/i/ijsfpibqm.css';
import '../../css/m/m-nuw3bni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ce6gc0-_s"/><path class="ijsfpibqm"/><path class="m-nuw3bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:authy-logo"} {...others} />);
}

export default Component;
