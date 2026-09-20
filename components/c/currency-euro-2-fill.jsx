import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5e2sw09k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5e2sw09k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-euro-2-fill"} {...others} />);
}

export default Component;
