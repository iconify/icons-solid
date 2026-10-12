import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avmy5ib4j.css';
import '../../css/q/q2vmesbkz.css';
import '../../css/h/hsf-92beb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="avmy5ib4j"/><rect class="q2vmesbkz"/><path class="hsf-92beb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-sparkle"} {...others} />);
}

export default Component;
