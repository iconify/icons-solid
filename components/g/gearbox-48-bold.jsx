import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg03hcbot.css';
import '../../css/y/ybe7dm20u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gg03hcbot"/><path class="ybe7dm20u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gearbox-48-bold"} {...others} />);
}

export default Component;
