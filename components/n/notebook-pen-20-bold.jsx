import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g29p-d96q.css';
import '../../css/y/ym1dumb8f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g29p-d96q"/><path class="ym1dumb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-pen-20-bold"} {...others} />);
}

export default Component;
