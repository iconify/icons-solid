import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_pgce4lp.css';
import '../../css/p/pn-6xpb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_pgce4lp"/><path class="pn-6xpb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-left-stroke-square-filled"} {...others} />);
}

export default Component;
