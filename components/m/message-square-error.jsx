import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk4qf0b7g.css';
import '../../css/g/gjtzg1bku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yk4qf0b7g"/><path class="gjtzg1bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-square-error"} {...others} />);
}

export default Component;
