import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urermcsco.css';
import '../../css/h/hjvg905kl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="urermcsco"/><path class="hjvg905kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-minimalistic-bold"} {...others} />);
}

export default Component;
