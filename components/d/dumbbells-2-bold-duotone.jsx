import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzhk1zbhj.css';
import '../../css/a/ann86zbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzhk1zbhj"/><path class="ann86zbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-bold-duotone"} {...others} />);
}

export default Component;
