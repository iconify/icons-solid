import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmodlobup.css';
import '../../css/e/emd0dl2-p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hmodlobup"/><path class="emd0dl2-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-card-48-bold"} {...others} />);
}

export default Component;
