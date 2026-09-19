import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y6jgvvbge.css';
import '../../css/z/z9u8ap1ht.css';
import '../../css/a/ah80pbbtz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y6jgvvbge"/><path class="z9u8ap1ht"/><path class="ah80pbbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:landscape"} {...others} />);
}

export default Component;
