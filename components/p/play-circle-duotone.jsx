import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hta34308p.css';
import '../../css/r/r6i16ds0i.css';
import '../../css/e/e70b2ubmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="hta34308p"/><circle class="r6i16ds0i"/><path class="e70b2ubmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:play-circle-duotone"} {...others} />);
}

export default Component;
