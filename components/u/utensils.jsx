import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgg19vjif.css';
import '../../css/s/s85m2hy_z.css';
import '../../css/x/xrfmnukqn.css';
import '../../css/f/fjgmyccsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgg19vjif wm-k"/><path class="s85m2hy_z wm-a"/><path class="wm-k xrfmnukqn"/><path class="fjgmyccsp wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:utensils"} {...others} />);
}

export default Component;
