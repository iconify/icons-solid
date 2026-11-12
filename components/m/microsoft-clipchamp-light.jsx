import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebnq89bkg.css';
import '../../css/c/c03ahsjyw.css';
import '../../css/t/t98npfuxz.css';
import '../../css/p/pyxl_o00f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ebnq89bkg"/><path class="c03ahsjyw"/><path class="t98npfuxz"/><path class="pyxl_o00f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-clipchamp-light"} {...others} />);
}

export default Component;
