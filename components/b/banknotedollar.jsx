import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz3-xgbbc.css';
import '../../css/l/lw8ky0vfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pz3-xgbbc"/><path class="lw8ky0vfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:banknotedollar"} {...others} />);
}

export default Component;
