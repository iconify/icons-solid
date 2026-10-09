import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s69k6bb7h.css';
import '../../css/o/ofyi6pbuy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s69k6bb7h"/><path class="ofyi6pbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-cylinder-20-bold"} {...others} />);
}

export default Component;
