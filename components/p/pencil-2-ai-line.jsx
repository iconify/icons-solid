import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et3dy0ben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="et3dy0ben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pencil-2-ai-line"} {...others} />);
}

export default Component;
