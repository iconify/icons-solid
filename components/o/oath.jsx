import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehpyr2bhb.css';
import '../../css/d/d0za96bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ehpyr2bhb"/><path class="d0za96bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:oath"} {...others} />);
}

export default Component;
