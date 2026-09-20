import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6jc4kd1z.css';
import '../../css/b/bikjexb7g.css';
import '../../css/j/j_8h5jbef.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q6jc4kd1z"/><path class="bikjexb7g"/><path class="j_8h5jbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:margin"} {...others} />);
}

export default Component;
