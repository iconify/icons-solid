import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvm4kcb4a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tvm4kcb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:undo"} {...others} />);
}

export default Component;
