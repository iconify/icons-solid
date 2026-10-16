import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szahujb-p.css';
import '../../css/g/gfv8n0rry.css';
import '../../css/c/c0xe9rb-x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="szahujb-p"/><path class="gfv8n0rry"/><path class="c0xe9rb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:budget-20"} {...others} />);
}

export default Component;
