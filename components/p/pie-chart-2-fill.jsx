import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyp6jzb_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gyp6jzb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pie-chart-2-fill"} {...others} />);
}

export default Component;
