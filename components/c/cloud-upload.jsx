import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/houoq25gr.css';
import '../../css/i/iidgtubnu.css';
import '../../css/s/su0illb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="houoq25gr"/><path class="iidgtubnu"/><path class="su0illb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:cloud-upload"} {...others} />);
}

export default Component;
