import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_6xd8_wg.css';

const viewBox = {"width":368,"height":384};
const content = `<path class="e_6xd8_wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:airline-seat-legroom-reduced"} {...others} />);
}

export default Component;
