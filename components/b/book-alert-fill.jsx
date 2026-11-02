import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okxd8xsdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okxd8xsdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:book-alert-fill"} {...others} />);
}

export default Component;
