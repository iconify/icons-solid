import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tng3gzelg.css';
import '../../css/h/hzpmfc_wi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tng3gzelg"/><path class="hzpmfc_wi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-pin-solid"} {...others} />);
}

export default Component;
