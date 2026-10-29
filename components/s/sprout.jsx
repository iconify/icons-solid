import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyaj6wb9r.css';
import '../../css/g/gnxu1ts-s.css';
import '../../css/p/pqyhd5p9m.css';
import '../../css/b/bppa-kbot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k xyaj6wb9r"/><path class="gnxu1ts-s wm-k"/><path class="pqyhd5p9m wm-k"/><path class="bppa-kbot wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sprout"} {...others} />);
}

export default Component;
