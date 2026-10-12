import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud9cl0y3d.css';
import '../../css/a/aba_xubdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ud9cl0y3d"/><path class="aba_xubdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-square-dot-filled"} {...others} />);
}

export default Component;
