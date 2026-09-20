import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj6sxxcbs.css';
import '../../css/a/amo0fbv9g.css';
import '../../css/x/x-e-8ab_i.css';
import '../../css/r/rpzz_3bpt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lj6sxxcbs"/><path class="amo0fbv9g"/><path class="x-e-8ab_i"/><path class="rpzz_3bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:gas-station-fuel-petroleum"} {...others} />);
}

export default Component;
