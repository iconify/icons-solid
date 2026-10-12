import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joh4xhb-o.css';
import '../../css/m/md8r-wrpw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="joh4xhb-o"/><path class="md8r-wrpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bandage-48-bold"} {...others} />);
}

export default Component;
