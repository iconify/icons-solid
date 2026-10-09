import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9c07i3qc.css';
import '../../css/c/c51f_wf4g.css';
import '../../css/m/mm5pgybwd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a9c07i3qc"/><path class="c51f_wf4g"/><path class="mm5pgybwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:factory-20-bold"} {...others} />);
}

export default Component;
