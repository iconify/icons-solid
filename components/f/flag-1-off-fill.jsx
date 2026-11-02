import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1rb0qbyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1rb0qbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:flag-1-off-fill"} {...others} />);
}

export default Component;
