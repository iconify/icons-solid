import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7hh0ng0w.css';
import '../../css/c/cdujlmbca.css';
import '../../css/t/tpz02j0hz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p7hh0ng0w"/><path class="cdujlmbca"/><path class="tpz02j0hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cam-20-bold"} {...others} />);
}

export default Component;
