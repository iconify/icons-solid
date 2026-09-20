import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htkm48jzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="htkm48jzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:devices-outline"} {...others} />);
}

export default Component;
