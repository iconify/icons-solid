import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwzuzjkxa.css';
import '../../css/q/qoa0stb0u.css';
import '../../css/k/kk9rwuwpp.css';
import '../../css/a/a0pv0abyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(1 0 .02944 .99957 16.34 14.93)" class="bwzuzjkxa"/><rect transform="matrix(1 0 .02944 .99957 1.67 15.12)" class="bwzuzjkxa"/><path class="qoa0stb0u"/><path class="kk9rwuwpp"/><path class="a0pv0abyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dinner"} {...others} />);
}

export default Component;
