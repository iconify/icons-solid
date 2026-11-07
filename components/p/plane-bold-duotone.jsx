import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua6aqkoxj.css';
import '../../css/d/d4zi-lbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ua6aqkoxj"/><path class="d4zi-lbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plane-bold-duotone"} {...others} />);
}

export default Component;
