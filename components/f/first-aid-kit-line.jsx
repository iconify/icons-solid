import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj6vku9wp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj6vku9wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:first-aid-kit-line"} {...others} />);
}

export default Component;
