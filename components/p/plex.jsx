import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckuc9nmc.css';
import '../../css/h/hze02wt4y.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="wckuc9nmc"/><path class="hze02wt4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plex"} {...others} />);
}

export default Component;
