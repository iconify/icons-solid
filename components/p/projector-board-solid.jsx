import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkb-87aiv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fkb-87aiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:projector-board-solid"} {...others} />);
}

export default Component;
