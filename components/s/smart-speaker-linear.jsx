import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/esaz-g1-g.css';
import '../../css/n/nzmqz3bvt.css';
import '../../css/n/nk9jicc4w.css';
import '../../css/c/cqg5ru5ax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="esaz-g1-g"/><path class="nzmqz3bvt"/><path class="nk9jicc4w"/><path class="cqg5ru5ax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-linear"} {...others} />);
}

export default Component;
