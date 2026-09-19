import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6w4ul_vh.css';

const viewBox = {"width":527,"height":735};
const content = `<path class="q6w4ul_vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:h-upper-case"} {...others} />);
}

export default Component;
