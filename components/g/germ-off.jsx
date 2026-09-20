import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bujzk1bfh.css';
import '../../css/p/p-j5pvewu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bujzk1bfh"/><path class="p-j5pvewu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:germ-off"} {...others} />);
}

export default Component;
