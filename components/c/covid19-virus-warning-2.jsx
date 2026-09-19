import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e3_0itu4g.css';
import '../../css/u/u-br6yhtk.css';
import '../../css/z/zct82vb9f.css';
import '../../css/f/fll0uqb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e3_0itu4g"/><path class="u-br6yhtk"/><path class="zct82vb9f"/><path class="fll0uqb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-warning-2"} {...others} />);
}

export default Component;
