import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlcn6fb6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mlcn6fb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-diaphragm"} {...others} />);
}

export default Component;
