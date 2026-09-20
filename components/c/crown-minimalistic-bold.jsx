import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej9tf-bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ej9tf-bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-minimalistic-bold"} {...others} />);
}

export default Component;
