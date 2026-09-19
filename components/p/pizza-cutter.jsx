import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv8ph2xqc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nv8ph2xqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pizza-cutter"} {...others} />);
}

export default Component;
