import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f38hm9bft.css';
import '../../css/s/spsll1bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f38hm9bft"/><path class="spsll1bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pie-chart"} {...others} />);
}

export default Component;
