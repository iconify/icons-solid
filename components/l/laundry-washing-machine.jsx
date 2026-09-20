import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oabrzubno.css';
import '../../css/s/s-0rvs0ec.css';
import '../../css/z/zruh-lbqh.css';
import '../../css/v/v0xg5qbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="oabrzubno"/><path class="s-0rvs0ec"/><path class="zruh-lbqh"/><path class="v0xg5qbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:laundry-washing-machine"} {...others} />);
}

export default Component;
