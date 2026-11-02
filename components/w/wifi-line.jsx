import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/geya-bbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="geya-bbiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wifi-line"} {...others} />);
}

export default Component;
