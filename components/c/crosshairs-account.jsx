import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv1mpk7pw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv1mpk7pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:crosshairs-account"} {...others} />);
}

export default Component;
