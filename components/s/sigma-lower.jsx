import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgfcr4b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mgfcr4b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sigma-lower"} {...others} />);
}

export default Component;
