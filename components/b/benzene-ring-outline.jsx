import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7ugcyjie.css';
import '../../css/a/al80obcvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7ugcyjie"/><path clip-rule="evenodd" class="al80obcvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:benzene-ring-outline"} {...others} />);
}

export default Component;
