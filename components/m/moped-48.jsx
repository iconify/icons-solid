import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sexcl-g3a.css';
import '../../css/e/ekk1g4byl.css';
import '../../css/l/lw-5wybjf.css';
import '../../css/i/isb5rmbbx.css';
import '../../css/k/kaeozsbrc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sexcl-g3a"/><path class="ekk1g4byl"/><path class="lw-5wybjf"/><path class="isb5rmbbx"/><path class="kaeozsbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moped-48"} {...others} />);
}

export default Component;
