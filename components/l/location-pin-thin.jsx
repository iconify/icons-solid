import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/r9-lei5up.css';
import '../../css/h/hh5pf1hma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="r9-lei5up"/><path class="hh5pf1hma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:location-pin-thin"} {...others} />);
}

export default Component;
