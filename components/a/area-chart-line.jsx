import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj0h3714z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nj0h3714z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:area-chart-line"} {...others} />);
}

export default Component;
