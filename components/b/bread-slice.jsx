import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sslzmeb7d.css';
import '../../css/y/yny5wvq0t.css';
import '../../css/a/a_064-ors.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sslzmeb7d"/><path class="yny5wvq0t"/><path class="a_064-ors"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bread-slice"} {...others} />);
}

export default Component;
