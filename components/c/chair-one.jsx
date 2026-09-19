import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rudj3bvol.css';
import '../../css/c/c7dx5cb3s.css';
import '../../css/m/m0kz_fb2f.css';
import '../../css/u/u10kgnb9h.css';
import '../../css/i/i57p2dift.css';
import '../../css/j/j1n6ewbdc.css';
import '../../css/p/pul7nqbyt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rudj3bvol"/><path class="c7dx5cb3s"/><path class="m0kz_fb2f"/><path class="u10kgnb9h"/><path class="i57p2dift"/><path class="j1n6ewbdc"/><path class="pul7nqbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chair-one"} {...others} />);
}

export default Component;
