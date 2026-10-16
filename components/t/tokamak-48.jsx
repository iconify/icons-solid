import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as2_m7byb.css';
import '../../css/f/fe3vb5b8y.css';
import '../../css/j/j6ppqza5o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="as2_m7byb"/><path class="fe3vb5b8y"/><path class="j6ppqza5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tokamak-48"} {...others} />);
}

export default Component;
