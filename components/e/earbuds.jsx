import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm0rkj2aq.css';
import '../../css/s/sjyb2qfru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qm0rkj2aq"/><path class="sjyb2qfru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:earbuds"} {...others} />);
}

export default Component;
