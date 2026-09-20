import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h5t_h2bku.css';
import '../../css/s/s8benwb9y.css';
import '../../css/w/w37drss5a.css';
import '../../css/r/r9io6ibem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h5t_h2bku"/><path class="s8benwb9y"/><path class="w37drss5a"/><path class="r9io6ibem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-line-duotone"} {...others} />);
}

export default Component;
