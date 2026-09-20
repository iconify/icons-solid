import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdk_krcvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdk_krcvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:home-4-fill"} {...others} />);
}

export default Component;
