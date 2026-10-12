import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf3wb_zhv.css';
import '../../css/x/xbbrjje4i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nf3wb_zhv"/><path class="xbbrjje4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clapperboard-20"} {...others} />);
}

export default Component;
