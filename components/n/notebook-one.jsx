import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/drc0ytbts.css';
import '../../css/r/rc1jhvaam.css';
import '../../css/i/i3vo1qb3e.css';
import '../../css/r/r9imp5bbq.css';
import '../../css/q/q65w8gblw.css';
import '../../css/d/dxgqlbbla.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="drc0ytbts"/><path class="rc1jhvaam"/><path class="i3vo1qb3e"/><path class="r9imp5bbq"/><path class="q65w8gblw"/><path class="dxgqlbbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:notebook-one"} {...others} />);
}

export default Component;
