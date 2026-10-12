import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g67_cgb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g67_cgb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-plug-filled"} {...others} />);
}

export default Component;
