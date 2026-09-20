import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpk_r1xfw.css';
import '../../css/j/jwxrimbri.css';
import '../../css/r/rsw0cp66o.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xpk_r1xfw"/><path class="jwxrimbri"/><path class="rsw0cp66o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:processing"} {...others} />);
}

export default Component;
