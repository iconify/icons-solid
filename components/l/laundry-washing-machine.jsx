import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/exrbxu9-v.css';
import '../../css/h/hxf48qibx.css';
import '../../css/u/u88y-n2cz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="exrbxu9-v"/><path class="hxf48qibx"/><path class="u88y-n2cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:laundry-washing-machine"} {...others} />);
}

export default Component;
