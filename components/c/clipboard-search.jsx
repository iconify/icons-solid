import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/icz0-ubxj.css';
import '../../css/s/sj2jncbna.css';
import '../../css/o/odm-58bur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="icz0-ubxj"/><path class="sj2jncbna"/><path class="odm-58bur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:clipboard-search"} {...others} />);
}

export default Component;
