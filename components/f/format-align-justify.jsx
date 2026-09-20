import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-o8_yu_f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-o8_yu_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-align-justify"} {...others} />);
}

export default Component;
