import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjapdh0be.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjapdh0be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:facebook-box-line"} {...others} />);
}

export default Component;
