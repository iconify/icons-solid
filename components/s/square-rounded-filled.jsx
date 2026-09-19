import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds4m469vp.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ds4m469vp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:square-rounded-filled"} {...others} />);
}

export default Component;
