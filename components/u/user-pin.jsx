import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zcd6sob0c.css';
import '../../css/h/h4_bsz-2e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="zcd6sob0c"/><path class="h4_bsz-2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-pin"} {...others} />);
}

export default Component;
