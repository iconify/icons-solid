import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svg3_r69m.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="svg3_r69m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:glass"} {...others} />);
}

export default Component;
