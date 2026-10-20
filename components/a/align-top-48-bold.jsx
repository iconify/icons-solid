import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cntw57bva.css';
import '../../css/q/q4ayogbqs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cntw57bva"/><path class="q4ayogbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-top-48-bold"} {...others} />);
}

export default Component;
