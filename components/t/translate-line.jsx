import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-3uxnbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-3uxnbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:translate-line"} {...others} />);
}

export default Component;
