import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikzqlv-ka.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="ikzqlv-ka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:smile-wink"} {...others} />);
}

export default Component;
