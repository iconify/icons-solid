import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epjnci0vj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="epjnci0vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cup-and-saucer"} {...others} />);
}

export default Component;
