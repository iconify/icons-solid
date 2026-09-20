import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auhw76z8f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auhw76z8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:directions-line"} {...others} />);
}

export default Component;
