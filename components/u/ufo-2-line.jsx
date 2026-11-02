import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjf-5bbta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjf-5bbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ufo-2-line"} {...others} />);
}

export default Component;
