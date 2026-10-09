import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woejr8lkf.css';
import '../../css/h/h8ky2qf0l.css';
import '../../css/w/wbh530b4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="woejr8lkf"/><path class="h8ky2qf0l"/><path class="wbh530b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-sync-20-bold"} {...others} />);
}

export default Component;
