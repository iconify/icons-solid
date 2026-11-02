import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdrlq8twt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdrlq8twt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:upload-fill"} {...others} />);
}

export default Component;
