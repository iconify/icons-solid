import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/ng9q4tb5b.css';
import '../../css/e/e3pn2bxuq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="ng9q4tb5b"/><path class="e3pn2bxuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:setting"} {...others} />);
}

export default Component;
