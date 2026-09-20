import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcohcvn_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mcohcvn_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:web-section"} {...others} />);
}

export default Component;
