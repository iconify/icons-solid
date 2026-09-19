import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/seuormdxt.css';
import '../../css/b/br8th3blo.css';
import '../../css/b/buhh-db0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="seuormdxt"/><path class="br8th3blo"/><path class="buhh-db0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gas-pipe"} {...others} />);
}

export default Component;
