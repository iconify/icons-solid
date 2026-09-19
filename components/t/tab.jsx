import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0dd72brq.css';
import '../../css/m/modo5tghq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0dd72brq"/><path class="modo5tghq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:tab"} {...others} />);
}

export default Component;
