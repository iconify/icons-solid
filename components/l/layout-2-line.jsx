import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w52t0fnlv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w52t0fnlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:layout-2-line"} {...others} />);
}

export default Component;
