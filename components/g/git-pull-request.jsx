import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3kx9geaj.css';
import '../../css/z/z85nqcksd.css';
import '../../css/j/j3bpqebed.css';
import '../../css/y/yw5p98brt.css';
import '../../css/l/lws1ombez.css';
import '../../css/u/u2hci0bbr.css';
import '../../css/y/yqeubii_h.css';
import '../../css/b/bi2x9w1ku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u3kx9geaj"/><path class="z85nqcksd"/><path class="j3bpqebed"/><path class="yw5p98brt"/><path class="lws1ombez"/><path class="u2hci0bbr"/><path class="yqeubii_h"/><path class="bi2x9w1ku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:git-pull-request"} {...others} />);
}

export default Component;
