import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o89debbzw.css';
import '../../css/l/lm68pefyu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o89debbzw"/><path class="lm68pefyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-prismatic-48"} {...others} />);
}

export default Component;
