import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wvq8chrbx.css';
import '../../css/d/df8z9fbun.css';
import '../../css/w/wg32sp1ln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k wvq8chrbx"/><path class="df8z9fbun wm-a"/><path class="wg32sp1ln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:list-todo"} {...others} />);
}

export default Component;
