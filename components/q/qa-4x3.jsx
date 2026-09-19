import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/estb-abdk.css';
import '../../css/d/dicdvz1vu.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="estb-abdk"/><path class="dicdvz1vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:qa-4x3"} {...others} />);
}

export default Component;
