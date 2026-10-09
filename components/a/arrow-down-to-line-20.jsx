import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3qadv63d.css';
import '../../css/p/p3nhuib5s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a3qadv63d"/><path class="p3nhuib5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-to-line-20"} {...others} />);
}

export default Component;
