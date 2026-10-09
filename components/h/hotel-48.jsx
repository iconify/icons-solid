import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqjbftbwq.css';
import '../../css/q/qi4gmjz3h.css';
import '../../css/h/hjy7c8brq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kqjbftbwq"/><path class="qi4gmjz3h"/><path class="hjy7c8brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hotel-48"} {...others} />);
}

export default Component;
