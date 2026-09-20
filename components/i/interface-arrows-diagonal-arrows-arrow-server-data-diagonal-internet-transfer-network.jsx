import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox-65bbyj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ox-65bbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-diagonal-arrows-arrow-server-data-diagonal-internet-transfer-network"} {...others} />);
}

export default Component;
