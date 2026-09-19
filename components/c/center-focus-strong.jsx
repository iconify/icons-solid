import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3w5-xb3l.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="b3w5-xb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:center-focus-strong"} {...others} />);
}

export default Component;
