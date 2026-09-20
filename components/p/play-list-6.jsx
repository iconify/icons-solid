import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-7rx9b2q.css';
import '../../css/l/l-hzh2nsr.css';
import '../../css/s/s-m9efb1p.css';
import '../../css/d/drqk0bb-g.css';
import '../../css/c/cn9rn4b9o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n-7rx9b2q"/><path class="l-hzh2nsr"/><path class="s-m9efb1p"/><path class="drqk0bb-g"/><path class="cn9rn4b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:play-list-6"} {...others} />);
}

export default Component;
