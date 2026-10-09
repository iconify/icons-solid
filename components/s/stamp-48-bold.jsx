import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_d0rvbso.css';
import '../../css/a/ak7-_zcym.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a_d0rvbso"/><path class="ak7-_zcym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stamp-48-bold"} {...others} />);
}

export default Component;
