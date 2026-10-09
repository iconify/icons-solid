import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y36iykq1u.css';
import '../../css/p/psji0nj2g.css';
import '../../css/n/nsy1iobka.css';
import '../../css/s/szn1rdbov.css';
import '../../css/x/x9cdk3d8e.css';
import '../../css/d/dwl70abcy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y36iykq1u"/><path class="psji0nj2g"/><path class="nsy1iobka"/><path class="szn1rdbov"/><path class="x9cdk3d8e"/><path class="dwl70abcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-bike-48-bold"} {...others} />);
}

export default Component;
