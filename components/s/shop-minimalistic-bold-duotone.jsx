import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vl7l5cbrw.css';
import '../../css/n/nur9zm4bq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vl7l5cbrw"/><path class="nur9zm4bq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
