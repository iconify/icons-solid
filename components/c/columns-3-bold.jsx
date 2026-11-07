import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4rs5k0ap.css';
import '../../css/d/dan73zqnv.css';
import '../../css/z/z41gnwbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4rs5k0ap"/><path class="dan73zqnv"/><path class="z41gnwbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-bold"} {...others} />);
}

export default Component;
