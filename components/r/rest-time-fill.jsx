import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvz5ev-fh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvz5ev-fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:rest-time-fill"} {...others} />);
}

export default Component;
