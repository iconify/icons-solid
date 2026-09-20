import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5cclvuqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h5cclvuqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:answer-machine-voice-mail"} {...others} />);
}

export default Component;
