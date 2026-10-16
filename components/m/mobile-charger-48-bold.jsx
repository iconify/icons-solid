import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcjo-6bpf.css';
import '../../css/g/gjx6_nbye.css';
import '../../css/f/f9s4ogcoy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gcjo-6bpf"/><path class="gjx6_nbye"/><path class="f9s4ogcoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mobile-charger-48-bold"} {...others} />);
}

export default Component;
