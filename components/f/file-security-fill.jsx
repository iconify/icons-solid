import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4gm5vbqz.css';
import '../../css/j/jw4xvqyjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x4gm5vbqz"/><path class="jw4xvqyjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-security-fill"} {...others} />);
}

export default Component;
