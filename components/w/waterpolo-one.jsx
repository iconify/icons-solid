import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd9ketbni.css';
import '../../css/x/x_k7kub2j.css';
import '../../css/u/ubr3rccgt.css';
import '../../css/t/tyocggbrc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dd9ketbni"/><path class="x_k7kub2j"/><path class="ubr3rccgt"/><path class="tyocggbrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:waterpolo-one"} {...others} />);
}

export default Component;
