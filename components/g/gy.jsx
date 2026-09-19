import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qw8cgmb3a.css';
import '../../css/v/vg96bpbxv.css';
import '../../css/e/eic9k91kw.css';
import '../../css/j/j30xvkr6z.css';
import '../../css/a/a0a4fku7h.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qw8cgmb3a"/><path class="vg96bpbxv"/><path class="eic9k91kw"/><path class="j30xvkr6z"/><path class="a0a4fku7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:gy"} {...others} />);
}

export default Component;
