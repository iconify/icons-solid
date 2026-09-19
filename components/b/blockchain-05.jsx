import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y4pucs45z.css';
import '../../css/b/beby--3pr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y4pucs45z"/><path class="beby--3pr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blockchain-05"} {...others} />);
}

export default Component;
