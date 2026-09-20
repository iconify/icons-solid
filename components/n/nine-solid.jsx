import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-nfdt3vj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-nfdt3vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:nine-solid"} {...others} />);
}

export default Component;
