import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfz1bwggw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfz1bwggw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safe-shield-fill"} {...others} />);
}

export default Component;
