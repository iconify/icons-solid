import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr0t6xbmu.css';
import '../../css/h/hviuulbfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yr0t6xbmu"/><path class="hviuulbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:beer-20-bold"} {...others} />);
}

export default Component;
