import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn2zpo8ew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rn2zpo8ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cube-vertex"} {...others} />);
}

export default Component;
