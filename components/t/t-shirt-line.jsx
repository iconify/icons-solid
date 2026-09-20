import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q975aab4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q975aab4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:t-shirt-line"} {...others} />);
}

export default Component;
