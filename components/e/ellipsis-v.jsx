import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob3y1iinc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ob3y1iinc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:ellipsis-v"} {...others} />);
}

export default Component;
