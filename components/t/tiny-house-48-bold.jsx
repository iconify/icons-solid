import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mner4y11d.css';
import '../../css/i/ibp47861c.css';
import '../../css/m/mkkw_jb7z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mner4y11d"/><path class="ibp47861c"/><path class="mkkw_jb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tiny-house-48-bold"} {...others} />);
}

export default Component;
