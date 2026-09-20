import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/on5etz4se.css';
import '../../css/t/tnpc8ubgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="on5etz4se"/><path class="tnpc8ubgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-feedback-heart"} {...others} />);
}

export default Component;
