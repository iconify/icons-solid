import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkxahjftn.css';
import '../../css/x/xxi34xgyn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hkxahjftn"/><path class="xxi34xgyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:circuit"} {...others} />);
}

export default Component;
