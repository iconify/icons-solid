import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3lrazbrf.css';
import '../../css/j/jokc02a3k.css';
import '../../css/x/xwvzbv_it.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g3lrazbrf"/><path class="jokc02a3k"/><path class="xwvzbv_it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-scooter-48"} {...others} />);
}

export default Component;
