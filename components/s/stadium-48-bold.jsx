import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf4iecijn.css';
import '../../css/y/ylwrz8bdu.css';
import '../../css/a/a9vul7b8u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pf4iecijn"/><path class="ylwrz8bdu"/><path class="a9vul7b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stadium-48-bold"} {...others} />);
}

export default Component;
