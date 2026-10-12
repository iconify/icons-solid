import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9yynmbhe.css';
import '../../css/g/g-xpidcsw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c9yynmbhe"/><path class="g-xpidcsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caravan-20-bold"} {...others} />);
}

export default Component;
