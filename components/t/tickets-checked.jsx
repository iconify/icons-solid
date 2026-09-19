import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vzp6aob_f.css';
import '../../css/n/ni0hk-bja.css';
import '../../css/l/lrryd7lgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="vzp6aob_f"/><path class="ni0hk-bja"/><path class="lrryd7lgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tickets-checked"} {...others} />);
}

export default Component;
