import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkv2i5z9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkv2i5z9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sandglass-2-line"} {...others} />);
}

export default Component;
