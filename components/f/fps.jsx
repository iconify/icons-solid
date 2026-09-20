import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai4xf_p-i.css';
import '../../css/u/u-gxd5_sc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ai4xf_p-i"/><path class="u-gxd5_sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fps"} {...others} />);
}

export default Component;
