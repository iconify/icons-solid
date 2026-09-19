import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/phvmwjbiq.css';
import '../../css/h/hvz5n6bel.css';
import '../../css/g/gn6ol4bzw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="phvmwjbiq"/><path class="hvz5n6bel"/><path class="gn6ol4bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:butterfly"} {...others} />);
}

export default Component;
