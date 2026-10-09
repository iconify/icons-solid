import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpac6cbfj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jpac6cbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wave-energy-converter-20"} {...others} />);
}

export default Component;
