import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf6tr1s3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mf6tr1s3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:blender-phone-solid"} {...others} />);
}

export default Component;
