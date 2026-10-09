import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-4rqjbfm.css';
import '../../css/h/h1xc_8yrw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t-4rqjbfm"/><path class="h1xc_8yrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-network-48-bold"} {...others} />);
}

export default Component;
