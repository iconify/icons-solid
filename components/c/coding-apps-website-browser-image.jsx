import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xs6l_8bcn.css';
import '../../css/l/l13vyhbym.css';
import '../../css/f/fyk8w9bps.css';
import '../../css/e/eu1e82b8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xs6l_8bcn"/><path class="l13vyhbym"/><path class="fyk8w9bps"/><path class="eu1e82b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-browser-image"} {...others} />);
}

export default Component;
