import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a92ayxbla.css';
import '../../css/k/k32vqebaw.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a92ayxbla"/><path class="k32vqebaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:online-medical-service-monitor-solid"} {...others} />);
}

export default Component;
