import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_mpl-t0u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s_mpl-t0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gable-roofed-shelter-with-spoon-and-knife"} {...others} />);
}

export default Component;
