import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh5lwhb7v.css';
import '../../css/g/gyt736dji.css';
import '../../css/h/hua3e5bny.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bh5lwhb7v"/><path class="gyt736dji"/><path class="hua3e5bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laser-level-48-bold"} {...others} />);
}

export default Component;
