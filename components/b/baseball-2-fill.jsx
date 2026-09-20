import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8j6vh2mv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o8j6vh2mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:baseball-2-fill"} {...others} />);
}

export default Component;
