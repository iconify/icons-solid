import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggfa1pbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggfa1pbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ease-out-control-point-fill"} {...others} />);
}

export default Component;
