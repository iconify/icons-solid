import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtfw6nn5t.css';
import '../../css/a/a__hvdbzd.css';

const viewBox = {"width":1396.28,"height":387.95,"left":272.15,"top":648.13};
const content = `<path class="gtfw6nn5t"/><path class="a__hvdbzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:backrest-light"} {...others} />);
}

export default Component;
