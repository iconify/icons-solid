import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiftlgbea.css';
import '../../css/i/ix4gy1bln.css';

const viewBox = {"width":1000,"height":684.206};
const content = `<path class="kiftlgbea"/><path class="ix4gy1bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:whole-foods-market"} {...others} />);
}

export default Component;
