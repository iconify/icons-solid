import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpv7zboci.css';
import '../../css/c/chqabwsoe.css';
import '../../css/b/bqkka_ykq.css';
import '../../css/k/kyiokicbl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zpv7zboci"/><path class="chqabwsoe"/><path class="bqkka_ykq"/><path class="kyiokicbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-dish-48-bold"} {...others} />);
}

export default Component;
