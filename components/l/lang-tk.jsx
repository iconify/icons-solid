import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/h5hgesb2t.css';
import '../../css/y/yhgql6zoe.css';
import '../../css/l/l5c1x-pnh.css';
import '../../css/a/ap3ntbcft.css';
import '../../css/w/wgwle6bss.css';
import '../../css/k/k11umsbae.css';
import '../../css/f/fmafjkbei.css';
import '../../css/e/eoe3o4b7s.css';
import '../../css/w/w_1bdwbxg.css';
import '../../css/h/hxpqfsgft.css';
import '../../css/n/nophcwbci.css';
import '../../css/d/d7nq63bal.css';
import '../../css/m/mlecas7xp.css';
import '../../css/l/l03dw3dyu.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="h5hgesb2t"/><path class="yhgql6zoe"/><g class="l5c1x-pnh"><path class="ap3ntbcft"/><path class="wgwle6bss"/></g><path class="k11umsbae"/><path class="fmafjkbei"/><path class="eoe3o4b7s"/><g class="w_1bdwbxg"><path class="hxpqfsgft"/><circle class="nophcwbci"/><circle class="d7nq63bal"/></g><path class="mlecas7xp"/><path class="l03dw3dyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-tk"} {...others} />);
}

export default Component;
