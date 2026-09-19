import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8f9jxbbr.css';
import '../../css/l/lnrengbdk.css';
import '../../css/q/qyqyr9byk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="q8f9jxbbr"/><path class="lnrengbdk"/><rect class="qyqyr9byk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tv"} {...others} />);
}

export default Component;
