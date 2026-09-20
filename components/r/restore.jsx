import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ncw9xon8l.css';
import '../../css/z/zv43mobfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ncw9xon8l"/><path class="zv43mobfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:restore"} {...others} />);
}

export default Component;
