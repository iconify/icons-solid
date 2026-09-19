import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f89y2qbtf.css';
import '../../css/u/u1ez71txv.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="f89y2qbtf"/><path class="u1ez71txv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-color-stroke-12"} {...others} />);
}

export default Component;
