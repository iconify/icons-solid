import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8314acox.css';
import '../../css/f/falraebon.css';
import '../../css/l/lhy98hwgj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o8314acox"/><path class="falraebon"/><path class="lhy98hwgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cassette-48-bold"} {...others} />);
}

export default Component;
