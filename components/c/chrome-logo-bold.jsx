import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv3bsr2xr.css';
import '../../css/m/mbclv28jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rv3bsr2xr"/><path class="mbclv28jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chrome-logo-bold"} {...others} />);
}

export default Component;
