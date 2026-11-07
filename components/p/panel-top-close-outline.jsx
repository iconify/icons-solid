import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkaaq9b7k.css';
import '../../css/c/cre3c4s6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkaaq9b7k"/><path clip-rule="evenodd" class="cre3c4s6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-close-outline"} {...others} />);
}

export default Component;
