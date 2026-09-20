import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vw8avj3to.css';
import '../../css/k/krw6hkh8q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vw8avj3to"/><path class="krw6hkh8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:skull-2"} {...others} />);
}

export default Component;
