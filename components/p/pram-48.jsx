import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7_qae23k.css';
import '../../css/h/hpgxxvkzd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a7_qae23k"/><path class="hpgxxvkzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pram-48"} {...others} />);
}

export default Component;
