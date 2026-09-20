import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r26qt7bfw.css';
import '../../css/d/dtlxifb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r26qt7bfw"/><path class="dtlxifb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-data-transfer-bold"} {...others} />);
}

export default Component;
