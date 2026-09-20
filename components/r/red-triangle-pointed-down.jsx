import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at6mhmmvf.css';
import '../../css/r/r258pibsk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="at6mhmmvf"/><path class="r258pibsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-triangle-pointed-down"} {...others} />);
}

export default Component;
