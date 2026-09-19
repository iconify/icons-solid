import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/dx22jsbgo.css';
import '../../css/p/pgcwh7bgt.css';
import '../../css/c/cvpduvoip.css';
import '../../css/e/errurjr8u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="dx22jsbgo"/><path class="pgcwh7bgt"/><circle transform="rotate(-180 11 31)" class="cvpduvoip"/><path class="errurjr8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cancer"} {...others} />);
}

export default Component;
