import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jap95xb6l.css';
import '../../css/g/gkzp8sbnv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jap95xb6l"/><path class="gkzp8sbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:at"} {...others} />);
}

export default Component;
