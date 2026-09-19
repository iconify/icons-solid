import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afnpse13x.css';
import '../../css/n/n3zmfgmgx.css';
import '../../css/k/kcvmbebru.css';
import '../../css/l/l2igllydu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="afnpse13x"/><ellipse class="n3zmfgmgx"/><path class="kcvmbebru"/><path class="l2igllydu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cookedrice"} {...others} />);
}

export default Component;
