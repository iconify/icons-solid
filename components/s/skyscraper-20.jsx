import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1l3kib5h.css';
import '../../css/s/srysnc0xq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f1l3kib5h"/><path class="srysnc0xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skyscraper-20"} {...others} />);
}

export default Component;
