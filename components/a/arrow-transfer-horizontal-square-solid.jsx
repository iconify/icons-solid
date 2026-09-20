import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct11--kks.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ct11--kks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-transfer-horizontal-square-solid"} {...others} />);
}

export default Component;
