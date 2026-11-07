import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmr5y1isy.css';
import '../../css/i/i_u1m3bih.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fmr5y1isy"/><path class="i_u1m3bih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-bold"} {...others} />);
}

export default Component;
