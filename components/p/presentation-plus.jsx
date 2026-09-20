import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elkic2khp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="elkic2khp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:presentation-plus"} {...others} />);
}

export default Component;
