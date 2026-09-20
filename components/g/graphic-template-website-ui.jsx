import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x6v68rswn.css';
import '../../css/d/d6anxsumq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="x6v68rswn"/><path class="d6anxsumq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:graphic-template-website-ui"} {...others} />);
}

export default Component;
