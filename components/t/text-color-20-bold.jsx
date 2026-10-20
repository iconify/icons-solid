import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z53lt7bqm.css';
import '../../css/u/ul7690b-t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z53lt7bqm"/><path class="ul7690b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-color-20-bold"} {...others} />);
}

export default Component;
