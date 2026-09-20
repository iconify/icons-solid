import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8df8ibqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q8df8ibqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:weather-wind-flow-6-bold"} {...others} />);
}

export default Component;
