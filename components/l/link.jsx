import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmxkbubax.css';
import '../../css/q/qrl3wtblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmxkbubax"/><path class="qrl3wtblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:link"} {...others} />);
}

export default Component;
