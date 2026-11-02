import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynvx9g5yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynvx9g5yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:figma-fill"} {...others} />);
}

export default Component;
