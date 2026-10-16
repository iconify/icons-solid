import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnjw03tfc.css';
import '../../css/s/s76963bxh.css';
import '../../css/z/zo3asy96u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nnjw03tfc"/><path class="s76963bxh"/><path class="zo3asy96u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aluminium-48-bold"} {...others} />);
}

export default Component;
