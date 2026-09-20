import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg4d2loez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rg4d2loez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:swimming-line"} {...others} />);
}

export default Component;
