import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6zwtfsnc.css';
import '../../css/o/oxaibyp_q.css';
import '../../css/s/shojapewv.css';
import '../../css/w/wo9e8-bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="v6zwtfsnc"/><circle class="oxaibyp_q"/><path class="shojapewv"/><path class="wo9e8-bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:usb"} {...others} />);
}

export default Component;
