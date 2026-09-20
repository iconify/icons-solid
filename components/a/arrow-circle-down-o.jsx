import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j51w7z-wj.css';
import '../../css/e/edf-x6box.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j51w7z-wj"/><path class="edf-x6box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:arrow-circle-down-o"} {...others} />);
}

export default Component;
