import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t6a7bkb4b.css';
import '../../css/t/t4n5mvw8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t6a7bkb4b"/><path vector-effect="non-scaling-stroke" class="t4n5mvw8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:audio"} {...others} />);
}

export default Component;
