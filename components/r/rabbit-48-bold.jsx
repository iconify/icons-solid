import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_os-tbha.css';
import '../../css/g/g48181t2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o_os-tbha"/><path class="g48181t2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rabbit-48-bold"} {...others} />);
}

export default Component;
