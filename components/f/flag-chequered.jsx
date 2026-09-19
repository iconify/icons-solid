import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdilbsbas.css';
import '../../css/z/z05git9xa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdilbsbas"/><path class="z05git9xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:flag-chequered"} {...others} />);
}

export default Component;
