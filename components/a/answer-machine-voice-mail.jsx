import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4ae56hxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t4ae56hxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:answer-machine-voice-mail"} {...others} />);
}

export default Component;
