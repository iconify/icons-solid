import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5_t91bys.css';
import '../../css/b/bcu-xw_8y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g5_t91bys"/><path class="bcu-xw_8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-48-bold"} {...others} />);
}

export default Component;
