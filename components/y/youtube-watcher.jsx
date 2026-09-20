import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w84xo7bjy.css';
import '../../css/o/okm7grcet.css';
import '../../css/o/oeuv6sbbb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w84xo7bjy"/><path class="okm7grcet"/><path class="oeuv6sbbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:youtube-watcher"} {...others} />);
}

export default Component;
