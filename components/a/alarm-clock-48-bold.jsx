import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta5f1hbwd.css';
import '../../css/v/vgs6v8b5p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ta5f1hbwd"/><path class="vgs6v8b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-48-bold"} {...others} />);
}

export default Component;
