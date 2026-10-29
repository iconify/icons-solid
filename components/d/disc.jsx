import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/far50iw7l.css';
import '../../css/f/fs0yrab0m.css';
import '../../css/h/hffkpbehn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="far50iw7l wm-k"/><path class="fs0yrab0m wm-a"/><path class="hffkpbehn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:disc"} {...others} />);
}

export default Component;
