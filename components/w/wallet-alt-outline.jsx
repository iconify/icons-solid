import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_bs3g73h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m_bs3g73h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:wallet-alt-outline"} {...others} />);
}

export default Component;
