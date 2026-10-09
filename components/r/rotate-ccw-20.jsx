import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8vhyqvci.css';
import '../../css/f/f8cnuqbvs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t8vhyqvci"/><path class="f8cnuqbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-ccw-20"} {...others} />);
}

export default Component;
