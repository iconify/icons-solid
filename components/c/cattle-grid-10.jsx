import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g30n8ubuk.css';

const viewBox = {"width":10,"height":10};
const content = `<path class="g30n8ubuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:cattle-grid-10"} {...others} />);
}

export default Component;
