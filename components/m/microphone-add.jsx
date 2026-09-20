import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha04nrbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ha04nrbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:microphone-add"} {...others} />);
}

export default Component;
