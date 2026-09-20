import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq5gilrjk.css';
import '../../css/c/ck3-yx4dx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vq5gilrjk"/><path class="ck3-yx4dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:medical-instrument-ambulance-bed-bold"} {...others} />);
}

export default Component;
