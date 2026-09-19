import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljkqsabqw.css';
import '../../css/k/k8gf3yb7n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ljkqsabqw"/><path class="k8gf3yb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackskullcrossbones"} {...others} />);
}

export default Component;
