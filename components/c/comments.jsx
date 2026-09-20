import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2zvx5bln.css';
import '../../css/b/b3h4d4bti.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h2zvx5bln"/><path class="b3h4d4bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:comments"} {...others} />);
}

export default Component;
