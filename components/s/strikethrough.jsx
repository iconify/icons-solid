import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0bc9uw-v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v0bc9uw-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:strikethrough"} {...others} />);
}

export default Component;
