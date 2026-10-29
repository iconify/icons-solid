import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec_0r_tga.css';
import '../../css/n/nx9eqfb9e.css';
import '../../css/a/aloyasbca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ec_0r_tga wm-k"/><path class="nx9eqfb9e wm-a"/><path class="aloyasbca wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:upload"} {...others} />);
}

export default Component;
