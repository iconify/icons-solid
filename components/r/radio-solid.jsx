import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibo_w4bdw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ibo_w4bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:radio-solid"} {...others} />);
}

export default Component;
