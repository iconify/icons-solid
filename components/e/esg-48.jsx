import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlsrljbwz.css';
import '../../css/t/t2_6nubta.css';
import '../../css/t/t92t96xsx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rlsrljbwz"/><path class="t2_6nubta"/><path class="t92t96xsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:esg-48"} {...others} />);
}

export default Component;
