import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbzck1ymf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbzck1ymf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:wrench-solid"} {...others} />);
}

export default Component;
