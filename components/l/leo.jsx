import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lsv3vac3h.css';
import '../../css/a/agrs6obul.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="lsv3vac3h"/><path class="agrs6obul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:leo"} {...others} />);
}

export default Component;
