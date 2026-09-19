import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_h3ksw7p.css';
import '../../css/d/dr4olufdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_h3ksw7p"/><path class="dr4olufdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-up-right-stroke-circle-filled"} {...others} />);
}

export default Component;
