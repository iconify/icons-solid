import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbi78gooe.css';
import '../../css/l/lnfxn6v1w.css';
import '../../css/w/wu_lx2bhy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fbi78gooe"/><path class="lnfxn6v1w"/><path class="wu_lx2bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-refuelling-48-bold"} {...others} />);
}

export default Component;
