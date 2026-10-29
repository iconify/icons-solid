import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm-3rccze.css';
import '../../css/h/h3fdh8ipt.css';
import '../../css/f/fbp3cgb3s.css';
import '../../css/a/aftd3mbeu.css';
import '../../css/e/eere0mbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-3rccze wm-k"/><path class="h3fdh8ipt wm-k"/><path class="fbp3cgb3s wm-a"/><path class="aftd3mbeu wm-a"/><path class="eere0mbbf wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:piggy-bank"} {...others} />);
}

export default Component;
