import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es5er9stz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es5er9stz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:eject-circle-outline"} {...others} />);
}

export default Component;
