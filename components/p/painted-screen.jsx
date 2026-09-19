import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7245g1tp.css';
import '../../css/z/zvafccczm.css';
import '../../css/m/mq5xx16sw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="k7245g1tp"/><path class="zvafccczm"/><rect transform="rotate(90 15 29)" class="mq5xx16sw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:painted-screen"} {...others} />);
}

export default Component;
