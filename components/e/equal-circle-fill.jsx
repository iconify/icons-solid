import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qirr8n72d.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="qirr8n72d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:equal-circle-fill"} {...others} />);
}

export default Component;
