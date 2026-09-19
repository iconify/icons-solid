import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygl6n1i5a.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="ygl6n1i5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:academia-square"} {...others} />);
}

export default Component;
