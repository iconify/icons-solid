import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eroh1ib1d.css';
import '../../css/e/ekmyd2l1t.css';
import '../../css/v/vdkkqgbeg.css';
import '../../css/v/vlrk2yboz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eroh1ib1d"/><path class="ekmyd2l1t"/><path class="vdkkqgbeg"/><path class="vlrk2yboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-tank-48-bold"} {...others} />);
}

export default Component;
