import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g38i4jtvc.css';
import '../../css/n/niz-1xdux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g38i4jtvc"/><path class="niz-1xdux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:right-round-arrow"} {...others} />);
}

export default Component;
