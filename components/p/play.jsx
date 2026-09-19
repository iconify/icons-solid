import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/v/vqu-kvbga.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="vqu-kvbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:play"} {...others} />);
}

export default Component;
