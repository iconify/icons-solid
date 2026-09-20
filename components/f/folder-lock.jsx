import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yx6ztq_7i.css';
import '../../css/e/e5ui2keut.css';
import '../../css/g/gp22g1bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="yx6ztq_7i"/><path class="e5ui2keut"/><path class="gp22g1bhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-lock"} {...others} />);
}

export default Component;
