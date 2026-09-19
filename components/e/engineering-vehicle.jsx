import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j850wac-i.css';
import '../../css/n/n56_8z4jg.css';
import '../../css/o/ofkbvnbsv.css';
import '../../css/z/z6z3uibua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="j850wac-i"/><path class="n56_8z4jg"/><circle class="ofkbvnbsv"/><circle class="z6z3uibua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:engineering-vehicle"} {...others} />);
}

export default Component;
