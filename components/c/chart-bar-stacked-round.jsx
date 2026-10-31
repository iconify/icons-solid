import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s04gq1kef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s04gq1kef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-stacked-round"} {...others} />);
}

export default Component;
