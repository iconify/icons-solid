import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytn98r1le.css';
import '../../css/h/hijr5tbvr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ytn98r1le"/><path class="hijr5tbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chart"} {...others} />);
}

export default Component;
