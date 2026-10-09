import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwc5xq_tz.css';
import '../../css/s/snnapq3bv.css';
import '../../css/e/e773tnhiu.css';
import '../../css/e/e4ihh9bih.css';
import '../../css/p/ptk9q0hpo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zwc5xq_tz"/><path class="snnapq3bv"/><path class="e773tnhiu"/><path class="e4ihh9bih"/><path class="ptk9q0hpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charging-hub-48-bold"} {...others} />);
}

export default Component;
