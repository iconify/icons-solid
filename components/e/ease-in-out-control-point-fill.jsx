import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m67v-61ux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m67v-61ux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ease-in-out-control-point-fill"} {...others} />);
}

export default Component;
