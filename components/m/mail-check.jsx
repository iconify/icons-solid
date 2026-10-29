import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg00i_boh.css';
import '../../css/h/h1a9fqbsg.css';
import '../../css/d/d91l8hv0w.css';
import '../../css/s/slojpgbec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pg00i_boh wm-k"/><path class="h1a9fqbsg wm-k"/><path class="d91l8hv0w wm-s"/><path class="slojpgbec wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mail-check"} {...others} />);
}

export default Component;
