import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_tzm0gmr.css';
import '../../css/x/xk1-tobir.css';
import '../../css/u/u2a_xg-zl.css';
import '../../css/j/jgazl0bjt.css';
import '../../css/n/nzhiq--ps.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v_tzm0gmr"/><path class="xk1-tobir"/><path class="u2a_xg-zl"/><path class="jgazl0bjt"/><path class="nzhiq--ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:flexed-biceps-2"} {...others} />);
}

export default Component;
