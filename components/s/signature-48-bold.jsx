import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lugoebbye.css';
import '../../css/e/e55annuph.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lugoebbye"/><path class="e55annuph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signature-48-bold"} {...others} />);
}

export default Component;
