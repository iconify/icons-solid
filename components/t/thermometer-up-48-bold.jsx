import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8kv1hbar.css';
import '../../css/g/gb_71gb0y.css';
import '../../css/y/yvuobzjdn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j8kv1hbar"/><path class="gb_71gb0y"/><path class="yvuobzjdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-up-48-bold"} {...others} />);
}

export default Component;
