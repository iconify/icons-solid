import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjhopx1lv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjhopx1lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:shimmer-evm"} {...others} />);
}

export default Component;
