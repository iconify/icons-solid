import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk8_knd5w.css';
import '../../css/l/lpsml7sns.css';
import '../../css/h/h1p473pfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sk8_knd5w"/><path class="lpsml7sns"/><path class="h1p473pfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
