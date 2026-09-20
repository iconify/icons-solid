import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lalxt3bxq.css';
import '../../css/t/tsc0xqbph.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lalxt3bxq"/><path class="tsc0xqbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:real-debrid"} {...others} />);
}

export default Component;
