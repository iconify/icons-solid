import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqep3ob2t.css';
import '../../css/p/p9q9isb-a.css';
import '../../css/r/rk00lts6n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fqep3ob2t"/><path class="p9q9isb-a"/><path class="rk00lts6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-direction-48-bold"} {...others} />);
}

export default Component;
