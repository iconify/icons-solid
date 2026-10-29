import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz_7f5bty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fz_7f5bty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:washing-machine-solid"} {...others} />);
}

export default Component;
