import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su8yfj8iz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="su8yfj8iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:corner-left-down-fill"} {...others} />);
}

export default Component;
