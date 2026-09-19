import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahxe6_p3m.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="ahxe6_p3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:text-bubble-fill"} {...others} />);
}

export default Component;
