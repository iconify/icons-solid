import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt1x3tsxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt1x3tsxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:k21"} {...others} />);
}

export default Component;
