import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_z-q-bhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_z-q-bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:line-chart-line"} {...others} />);
}

export default Component;
