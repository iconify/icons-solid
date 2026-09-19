import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5fi-nhgh.css';
import '../../css/s/s8x-bmb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5fi-nhgh"/><path class="s8x-bmb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chart-trend"} {...others} />);
}

export default Component;
