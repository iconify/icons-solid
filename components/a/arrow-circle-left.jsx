import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guhhauoca.css';
import '../../css/p/py4wsctwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="guhhauoca"/><path class="py4wsctwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-circle-left"} {...others} />);
}

export default Component;
