import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3fwuybqi.css';
import '../../css/b/bg063jb_r.css';
import '../../css/q/q-95t6xiu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c3fwuybqi"/><path class="bg063jb_r"/><path class="q-95t6xiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flask-48-bold"} {...others} />);
}

export default Component;
