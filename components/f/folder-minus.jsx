import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jy7x6zb6o.css';
import '../../css/w/wd0nr7boa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="jy7x6zb6o"/><path class="wd0nr7boa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:folder-minus"} {...others} />);
}

export default Component;
