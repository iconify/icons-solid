import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1-iebxfu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="t1-iebxfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cargobike-and-arrow-right-above-arrow-left"} {...others} />);
}

export default Component;
