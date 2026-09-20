import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taeho6whc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="taeho6whc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:desk-lamp-on"} {...others} />);
}

export default Component;
