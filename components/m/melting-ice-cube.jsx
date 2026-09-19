import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orf3lfbmm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="orf3lfbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:melting-ice-cube"} {...others} />);
}

export default Component;
