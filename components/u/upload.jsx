import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xofyrh50b.css';
import '../../css/k/k-n9lzbwz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xofyrh50b"/><path class="k-n9lzbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:upload"} {...others} />);
}

export default Component;
