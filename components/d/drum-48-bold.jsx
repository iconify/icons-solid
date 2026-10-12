import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt9zz1bdg.css';
import '../../css/k/k0w0kweqa.css';
import '../../css/j/j3bulgbev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tt9zz1bdg"/><path class="k0w0kweqa"/><path class="j3bulgbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drum-48-bold"} {...others} />);
}

export default Component;
