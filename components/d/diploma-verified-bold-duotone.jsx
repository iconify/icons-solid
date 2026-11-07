import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-p0544so.css';
import '../../css/y/ya5lozbiu.css';
import '../../css/u/uiiucxe1d.css';
import '../../css/i/iurn6wmvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k-p0544so"/><path class="ya5lozbiu"/><path class="uiiucxe1d"/><path class="iurn6wmvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-verified-bold-duotone"} {...others} />);
}

export default Component;
