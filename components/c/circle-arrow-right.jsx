import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw8_z_2nm.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="iw8_z_2nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:circle-arrow-right"} {...others} />);
}

export default Component;
