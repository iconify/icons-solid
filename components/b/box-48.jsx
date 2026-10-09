import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8_bhcc6x.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/x/x3jtncb2f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v8_bhcc6x"/><path class="i0wzpzqff"/><path class="x3jtncb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-48"} {...others} />);
}

export default Component;
