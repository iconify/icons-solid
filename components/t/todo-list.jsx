import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wktbs6b3w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wktbs6b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:todo-list"} {...others} />);
}

export default Component;
