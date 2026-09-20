import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsl8n1rvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zsl8n1rvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:bootstrap-line"} {...others} />);
}

export default Component;
