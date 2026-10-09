import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_ra3nchf.css';
import '../../css/e/esw8pgb2a.css';
import '../../css/l/ld5dtibtw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w_ra3nchf"/><path class="esw8pgb2a"/><path class="ld5dtibtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-hydrogen-48-bold"} {...others} />);
}

export default Component;
