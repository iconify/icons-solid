import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4wfm3bce.css';
import '../../css/y/ymsnj8cyl.css';
import '../../css/q/qwcvcmpjn.css';
import '../../css/w/wemuqvb9l.css';
import '../../css/r/rokttgz7h.css';
import '../../css/o/obwvb1j7c.css';
import '../../css/x/x3wcgwonh.css';
import '../../css/a/a25rpjqvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4wfm3bce wm-shadow"/><path class="wm-k ymsnj8cyl"/><path class="qwcvcmpjn wm-k"/><path class="wemuqvb9l wm-k"/><path class="rokttgz7h wm-k"/><path class="obwvb1j7c wm-k"/><path class="wm-shine x3wcgwonh"/><path class="a25rpjqvx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:grid-2x2"} {...others} />);
}

export default Component;
