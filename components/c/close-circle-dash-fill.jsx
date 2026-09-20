import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w739r15xw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w739r15xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:close-circle-dash-fill"} {...others} />);
}

export default Component;
