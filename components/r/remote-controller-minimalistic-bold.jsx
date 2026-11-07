import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdbfs0bsu.css';
import '../../css/r/riimeibow.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdbfs0bsu"/><path clip-rule="evenodd" class="riimeibow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-minimalistic-bold"} {...others} />);
}

export default Component;
