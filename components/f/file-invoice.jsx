import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hobd9v3ai.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="hobd9v3ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:file-invoice"} {...others} />);
}

export default Component;
