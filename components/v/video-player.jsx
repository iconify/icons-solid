import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sulq7hapi.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sulq7hapi"/><rect class="tbfod3hgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:video-player"} {...others} />);
}

export default Component;
