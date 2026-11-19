import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esc2lymja.css';
import '../../css/n/nn1p_hz4s.css';
import '../../css/w/w30ikw3fg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="esc2lymja"/><path class="nn1p_hz4s"/><path class="w30ikw3fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:blnd"} {...others} />);
}

export default Component;
