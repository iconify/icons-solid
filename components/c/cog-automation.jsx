import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/atf3sjb9z.css';
import '../../css/c/cxb-a4b0a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="atf3sjb9z"/><path class="cxb-a4b0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cog-automation"} {...others} />);
}

export default Component;
