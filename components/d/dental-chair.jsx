import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l5j9-ib-z.css';
import '../../css/y/y-6zsymla.css';
import '../../css/l/l0p3x0uhv.css';
import '../../css/s/s6hztnhpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l5j9-ib-z"/><path class="wm-k y-6zsymla"/><path class="l0p3x0uhv wm-a"/><path class="s6hztnhpp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dental-chair"} {...others} />);
}

export default Component;
