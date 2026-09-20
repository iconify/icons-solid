import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/ziv-r07au.css';
import '../../css/p/payua2mep.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ziv-r07au"/><path class="payua2mep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:suitcase-rolling"} {...others} />);
}

export default Component;
