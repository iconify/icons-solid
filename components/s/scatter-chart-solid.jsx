import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjrbj5liv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjrbj5liv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scatter-chart-solid"} {...others} />);
}

export default Component;
