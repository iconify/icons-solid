import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruxahrt1i.css';
import '../../css/q/qb44u234v.css';
import '../../css/u/uk0gurbfn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ruxahrt1i"/><path class="qb44u234v"/><path class="uk0gurbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:capacitor"} {...others} />);
}

export default Component;
