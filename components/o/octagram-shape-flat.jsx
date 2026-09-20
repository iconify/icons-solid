import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsggtbcdt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsggtbcdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:octagram-shape-flat"} {...others} />);
}

export default Component;
