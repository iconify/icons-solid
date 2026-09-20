import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn3kvq7mr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cn3kvq7mr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-infor-line"} {...others} />);
}

export default Component;
