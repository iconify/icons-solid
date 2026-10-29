import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tlyk4acuc.css';
import '../../css/b/bqvda-bch.css';
import '../../css/y/ydj8ci9ph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="tlyk4acuc"/><path class="bqvda-bch wm-a"/><path class="wm-s ydj8ci9ph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unplug-solid"} {...others} />);
}

export default Component;
