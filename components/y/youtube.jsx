import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tisyhd9pf.css';
import '../../css/u/udwyxyxbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tisyhd9pf"/><path class="udwyxyxbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:youtube"} {...others} />);
}

export default Component;
