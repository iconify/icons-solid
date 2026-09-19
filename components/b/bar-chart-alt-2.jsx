import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rew8143lt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rew8143lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:bar-chart-alt-2"} {...others} />);
}

export default Component;
