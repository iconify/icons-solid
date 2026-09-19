import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/q/q2qqhyzxr.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/b/brj-e3b6d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="q2qqhyzxr"/><path class="cz-xh6lnw"/><path class="brj-e3b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lip-gloss"} {...others} />);
}

export default Component;
