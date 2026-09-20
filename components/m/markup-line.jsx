import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osmryt6ri.css';
import '../../css/n/nzqrsacsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osmryt6ri"/><path class="nzqrsacsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:markup-line"} {...others} />);
}

export default Component;
