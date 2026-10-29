import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m52xe297f.css';
import '../../css/q/qdp4kbckc.css';
import '../../css/y/y3mtozbud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m52xe297f"/><path class="qdp4kbckc"/><path class="y3mtozbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plane"} {...others} />);
}

export default Component;
