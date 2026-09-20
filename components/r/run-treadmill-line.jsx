import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba-ur9lbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba-ur9lbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:run-treadmill-line"} {...others} />);
}

export default Component;
