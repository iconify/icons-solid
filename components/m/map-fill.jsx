import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jrr2rz3sn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jrr2rz3sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:map-fill"} {...others} />);
}

export default Component;
