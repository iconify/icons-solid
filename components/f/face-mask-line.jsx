import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psi_79vqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="psi_79vqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:face-mask-line"} {...others} />);
}

export default Component;
