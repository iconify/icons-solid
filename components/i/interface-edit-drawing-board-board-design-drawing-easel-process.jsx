import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3gl5vbsx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e3gl5vbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-drawing-board-board-design-drawing-easel-process"} {...others} />);
}

export default Component;
