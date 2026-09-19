import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh-9gdc_y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qh-9gdc_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:surrounded-shield"} {...others} />);
}

export default Component;
