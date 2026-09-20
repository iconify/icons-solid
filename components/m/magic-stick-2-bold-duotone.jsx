import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kma6xtbjg.css';
import '../../css/r/rf5dcqbwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kma6xtbjg"/><path class="rf5dcqbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-stick-2-bold-duotone"} {...others} />);
}

export default Component;
