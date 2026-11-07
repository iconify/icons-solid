import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9_1xi4pr.css';
import '../../css/a/anh277ned.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o9_1xi4pr"/><path class="anh277ned"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-2-bold-duotone"} {...others} />);
}

export default Component;
