import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxj_cdcom.css';
import '../../css/h/h1a9fqbsg.css';
import '../../css/o/ozm2d0b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxj_cdcom wm-k"/><path class="h1a9fqbsg wm-k"/><path class="ozm2d0b9u wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mail"} {...others} />);
}

export default Component;
