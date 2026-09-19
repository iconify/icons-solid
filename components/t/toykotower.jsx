import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qetnckbkp.css';
import '../../css/k/kgks08b4h.css';
import '../../css/u/ubw9i8bzo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qetnckbkp"/><path class="kgks08b4h"/><path class="ubw9i8bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:toykotower"} {...others} />);
}

export default Component;
