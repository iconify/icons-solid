import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/i9u83363m.css';
import '../../css/n/nag_kzbmf.css';
import '../../css/y/yhuvbkbie.css';
import '../../css/c/c17uwjbkn.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="i9u83363m"/><path class="nag_kzbmf"/><path class="yhuvbkbie"/><path class="c17uwjbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-kl"} {...others} />);
}

export default Component;
