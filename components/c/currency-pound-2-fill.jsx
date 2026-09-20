import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdfpqobjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdfpqobjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-pound-2-fill"} {...others} />);
}

export default Component;
