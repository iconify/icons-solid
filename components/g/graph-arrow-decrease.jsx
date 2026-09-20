import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/r/rjm7y25ow.css';
import '../../css/d/dy2h7dbih.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="rjm7y25ow"/><path class="dy2h7dbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graph-arrow-decrease"} {...others} />);
}

export default Component;
