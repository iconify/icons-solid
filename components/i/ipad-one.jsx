import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/la38rpbwm.css';
import '../../css/s/spfz9_bfy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="la38rpbwm"/><path class="spfz9_bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ipad-one"} {...others} />);
}

export default Component;
