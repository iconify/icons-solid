import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqg-h8wnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqg-h8wnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-chevron-right-fill"} {...others} />);
}

export default Component;
