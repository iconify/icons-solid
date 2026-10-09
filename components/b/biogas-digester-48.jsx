import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to4jptyni.css';
import '../../css/b/br88s8yip.css';
import '../../css/l/l__3sd1xp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="to4jptyni"/><path class="br88s8yip"/><path class="l__3sd1xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biogas-digester-48"} {...others} />);
}

export default Component;
