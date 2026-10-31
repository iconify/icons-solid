import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6pmzgb0n.css';
import '../../css/h/hk3krbs0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="q6pmzgb0n wm-k"/><path class="hk3krbs0f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dental-chair-gloss"} {...others} />);
}

export default Component;
