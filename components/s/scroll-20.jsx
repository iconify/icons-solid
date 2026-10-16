import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghip4ybrb.css';
import '../../css/w/wjctu7hsw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ghip4ybrb"/><path class="wjctu7hsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scroll-20"} {...others} />);
}

export default Component;
