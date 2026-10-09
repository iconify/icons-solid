import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_-yre08v.css';
import '../../css/z/z74qi6bgf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p_-yre08v"/><path class="z74qi6bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiation-20-bold"} {...others} />);
}

export default Component;
