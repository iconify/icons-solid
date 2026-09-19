import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdl6-jbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gdl6-jbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:send-outline"} {...others} />);
}

export default Component;
