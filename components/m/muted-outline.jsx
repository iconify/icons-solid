import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn48e2bxu.css';
import '../../css/q/qe1l0xb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn48e2bxu"/><path class="qe1l0xb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:muted-outline"} {...others} />);
}

export default Component;
