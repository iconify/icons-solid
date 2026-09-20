import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akqouxm0s.css';
import '../../css/n/nscyqnbmh.css';
import '../../css/a/axmh90bqa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="akqouxm0s"/><path class="nscyqnbmh"/><path class="axmh90bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plex-photos"} {...others} />);
}

export default Component;
