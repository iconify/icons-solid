import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ousr7gb-s.css';
import '../../css/s/s7at75-qv.css';
import '../../css/d/dz1d2ub-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ousr7gb-s wm-k"/><path class="s7at75-qv wm-k"/><path class="dz1d2ub-o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:panel-left-open"} {...others} />);
}

export default Component;
