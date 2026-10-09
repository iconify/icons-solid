import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-4rqjbfm.css';
import '../../css/a/aw6b_uyup.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t-4rqjbfm"/><path class="aw6b_uyup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacity-48-bold"} {...others} />);
}

export default Component;
