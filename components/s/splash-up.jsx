import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc3w75-_p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dc3w75-_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:splash-up"} {...others} />);
}

export default Component;
