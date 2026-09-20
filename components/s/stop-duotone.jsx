import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqrvzwb8p.css';
import '../../css/n/nb6j_obdw.css';
import '../../css/s/sy3bihbdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="fqrvzwb8p"><rect class="nb6j_obdw"/><rect class="sy3bihbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stop-duotone"} {...others} />);
}

export default Component;
