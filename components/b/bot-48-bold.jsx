import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu1885bds.css';
import '../../css/x/x3viw0xpi.css';
import '../../css/z/zn1bmf10z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qu1885bds"/><path class="x3viw0xpi"/><path class="zn1bmf10z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bot-48-bold"} {...others} />);
}

export default Component;
