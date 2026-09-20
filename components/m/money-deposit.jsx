import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blwbkzb0w.css';
import '../../css/r/rh4s4ac8b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="blwbkzb0w"/><path class="rh4s4ac8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:money-deposit"} {...others} />);
}

export default Component;
