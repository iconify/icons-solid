import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed8jw0b9n.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ed8jw0b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:pyramid"} {...others} />);
}

export default Component;
