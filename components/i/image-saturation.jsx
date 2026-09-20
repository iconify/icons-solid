import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/trvptyb9c.css';
import '../../css/g/gpt7hssnu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="trvptyb9c"/><path class="gpt7hssnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:image-saturation"} {...others} />);
}

export default Component;
