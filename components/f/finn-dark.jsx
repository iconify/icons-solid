import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wiwu_wund.css';
import '../../css/g/g714mx3oh.css';
import '../../css/i/iufs412sl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wiwu_wund"/><path class="g714mx3oh"/><path class="iufs412sl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:finn-dark"} {...others} />);
}

export default Component;
