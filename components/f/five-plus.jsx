import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cukg2h6lb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cukg2h6lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:five-plus"} {...others} />);
}

export default Component;
