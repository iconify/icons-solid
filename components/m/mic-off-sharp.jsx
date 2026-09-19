import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyk9gzbzx.css';
import '../../css/g/g1pzq4t8l.css';
import '../../css/j/jucagptoj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tyk9gzbzx"/><path class="g1pzq4t8l"/><path class="jucagptoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:mic-off-sharp"} {...others} />);
}

export default Component;
