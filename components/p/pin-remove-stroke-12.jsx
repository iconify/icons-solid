import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_hoj2etx.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="m_hoj2etx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pin-remove-stroke-12"} {...others} />);
}

export default Component;
