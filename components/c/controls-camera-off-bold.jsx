import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn_ovn4eq.css';
import '../../css/j/jm-sdob1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qn_ovn4eq"/><path class="jm-sdob1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:controls-camera-off-bold"} {...others} />);
}

export default Component;
