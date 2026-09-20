import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0y7dybjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j0y7dybjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard-command"} {...others} />);
}

export default Component;
