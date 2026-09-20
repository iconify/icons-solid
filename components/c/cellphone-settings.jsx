import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg5l5wb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mg5l5wb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cellphone-settings"} {...others} />);
}

export default Component;
