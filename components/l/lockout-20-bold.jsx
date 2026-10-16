import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utjy8ob5b.css';
import '../../css/t/tzya4mwzm.css';
import '../../css/c/cofnes2hh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="utjy8ob5b"/><path class="tzya4mwzm"/><path class="cofnes2hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockout-20-bold"} {...others} />);
}

export default Component;
