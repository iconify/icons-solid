import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cg546h7yc.css';
import '../../css/h/h0a-t_-kc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cg546h7yc"/><path class="h0a-t_-kc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:send"} {...others} />);
}

export default Component;
