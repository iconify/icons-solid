import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/uxboto48x.css';
import '../../css/m/meotuabpw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="uxboto48x"/><path class="meotuabpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:lightning-cloud"} {...others} />);
}

export default Component;
