import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8eq4u5hf.css';
import '../../css/m/mabwzbbvc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x8eq4u5hf"/><path class="mabwzbbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:check-circle"} {...others} />);
}

export default Component;
