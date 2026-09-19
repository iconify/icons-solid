import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pk7l-lh9v.css';
import '../../css/h/hqgavr6na.css';
import '../../css/y/y8tdl36bw.css';
import '../../css/y/yvjv1pirb.css';
import '../../css/c/c2kfkubvk.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="pk7l-lh9v"/><path class="hqgavr6na"/><path class="y8tdl36bw"/><path class="yvjv1pirb"/><path class="c2kfkubvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-en-sg"} {...others} />);
}

export default Component;
