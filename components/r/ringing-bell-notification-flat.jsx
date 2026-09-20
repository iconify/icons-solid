import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7c7wxb3o.css';
import '../../css/v/v9547bren.css';
import '../../css/r/r8nxz-9ft.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="x7c7wxb3o"/><path class="v9547bren"/><path clip-rule="evenodd" class="r8nxz-9ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ringing-bell-notification-flat"} {...others} />);
}

export default Component;
