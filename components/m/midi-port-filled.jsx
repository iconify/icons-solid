import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldfradshm.css';
import '../../css/i/itrl4jbne.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ldfradshm"/><path class="itrl4jbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:midi-port-filled"} {...others} />);
}

export default Component;
