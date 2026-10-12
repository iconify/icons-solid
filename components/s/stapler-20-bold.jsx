import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_36uib7w.css';
import '../../css/t/tli9a8yok.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x_36uib7w"/><path class="tli9a8yok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stapler-20-bold"} {...others} />);
}

export default Component;
