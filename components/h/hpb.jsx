import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oziqptg9c.css';
import '../../css/i/i45j36p9r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="oziqptg9c"/><path class="i45j36p9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:hpb"} {...others} />);
}

export default Component;
