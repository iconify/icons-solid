import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjyqpubda.css';
import '../../css/n/niilcsy8v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pjyqpubda"/><path class="niilcsy8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickaxe-48-bold"} {...others} />);
}

export default Component;
