import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/h/he2yosbpm.css';
import '../../css/n/nuzahtbll.css';
import '../../css/l/lvh9--bom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="he2yosbpm"/><path class="nuzahtbll"/><path class="lvh9--bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game-emoji"} {...others} />);
}

export default Component;
