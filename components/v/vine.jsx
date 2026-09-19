import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdlpb_b-j.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="mdlpb_b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:vine"} {...others} />);
}

export default Component;
