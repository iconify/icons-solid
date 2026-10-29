import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqrjnab8m.css';
import '../../css/w/wefi0wbjq.css';
import '../../css/y/yp49cdgax.css';
import '../../css/t/twlahtg0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqrjnab8m wm-a"/><path class="wefi0wbjq wm-k"/><path class="wm-k yp49cdgax"/><path class="twlahtg0b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:coffee"} {...others} />);
}

export default Component;
