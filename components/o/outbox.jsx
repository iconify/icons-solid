import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kue-_9i_s.css';
import '../../css/w/wm0qy2b2m.css';
import '../../css/p/p91j9gb3y.css';
import '../../css/b/bl5dnqrrh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kue-_9i_s"/><path class="wm0qy2b2m"/><path class="p91j9gb3y"/><path class="bl5dnqrrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:outbox"} {...others} />);
}

export default Component;
