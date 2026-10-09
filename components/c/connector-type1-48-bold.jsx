import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q668lybvz.css';
import '../../css/w/wxvvsl_vi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q668lybvz"/><path class="wxvvsl_vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-type1-48-bold"} {...others} />);
}

export default Component;
