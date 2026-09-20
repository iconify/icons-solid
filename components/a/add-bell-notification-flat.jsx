import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0a-n0wkh.css';
import '../../css/w/w8y2dbcal.css';
import '../../css/s/s52i0sl7s.css';
import '../../css/p/p4_4rxw6s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k0a-n0wkh"/><path class="w8y2dbcal"/><path clip-rule="evenodd" class="s52i0sl7s"/><path clip-rule="evenodd" class="p4_4rxw6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:add-bell-notification-flat"} {...others} />);
}

export default Component;
