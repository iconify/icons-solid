import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw5gyubsx.css';
import '../../css/j/jjcq2bbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hw5gyubsx"/><path class="jjcq2bbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:map-chat-filled"} {...others} />);
}

export default Component;
