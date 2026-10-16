import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjbhs-95h.css';
import '../../css/z/zns5-suvn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tjbhs-95h"/><path class="zns5-suvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tailings-dam-48"} {...others} />);
}

export default Component;
