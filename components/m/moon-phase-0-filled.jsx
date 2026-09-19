import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y82uu8bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y82uu8bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:moon-phase-0-filled"} {...others} />);
}

export default Component;
