import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/tnb7-1bnq.css';
import '../../css/m/m4nqbyncy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="tnb7-1bnq"/><path class="m4nqbyncy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:mic"} {...others} />);
}

export default Component;
