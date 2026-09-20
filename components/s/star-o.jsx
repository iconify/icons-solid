import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-fl9ri0k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n-fl9ri0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:star-o"} {...others} />);
}

export default Component;
