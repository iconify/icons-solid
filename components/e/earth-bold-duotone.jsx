import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxlgg64z.css';
import '../../css/q/qcdgl6btj.css';
import '../../css/e/e23ts40de.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="hrxlgg64z"/><path class="qcdgl6btj"/><path class="e23ts40de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:earth-bold-duotone"} {...others} />);
}

export default Component;
