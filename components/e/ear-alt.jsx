import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slwo16b5l.css';
import '../../css/u/uv22sacky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slwo16b5l"/><path class="uv22sacky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ear-alt"} {...others} />);
}

export default Component;
