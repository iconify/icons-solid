import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swfbeuwtc.css';
import '../../css/j/j1h9y0ztu.css';
import '../../css/p/p4i-mj4jw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swfbeuwtc"/><path class="j1h9y0ztu"/><path class="p4i-mj4jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:automl-video-intelligence"} {...others} />);
}

export default Component;
