import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gylj85but.css';
import '../../css/d/d1rsb2bvs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gylj85but"/><path class="d1rsb2bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-dual-48-bold"} {...others} />);
}

export default Component;
