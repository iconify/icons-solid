import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twga4rbxo.css';
import '../../css/l/ltcgo_b2x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="twga4rbxo"/><path class="ltcgo_b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brine-pond-48"} {...others} />);
}

export default Component;
