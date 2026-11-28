import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsmt0crsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsmt0crsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:badge-indian-rupee-solid"} {...others} />);
}

export default Component;
