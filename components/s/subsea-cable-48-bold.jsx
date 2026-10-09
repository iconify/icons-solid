import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0ao8hbvl.css';
import '../../css/s/ssm6s4b0l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q0ao8hbvl"/><path class="ssm6s4b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subsea-cable-48-bold"} {...others} />);
}

export default Component;
