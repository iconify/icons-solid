import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0ni6vb5b.css';
import '../../css/t/tyv6bwbtz.css';
import '../../css/a/ag5d8ub9y.css';
import '../../css/i/ijbr7jekk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g0ni6vb5b"/><path class="tyv6bwbtz"/><path class="ag5d8ub9y"/><path class="ijbr7jekk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lever-20"} {...others} />);
}

export default Component;
