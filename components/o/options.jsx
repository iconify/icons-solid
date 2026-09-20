import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nme7svmcs.css';
import '../../css/f/fnrrisblx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nme7svmcs"/><path class="fnrrisblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:options"} {...others} />);
}

export default Component;
