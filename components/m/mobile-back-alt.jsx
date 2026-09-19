import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul4ei0bva.css';
import '../../css/n/nd3y8ieci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ul4ei0bva"/><path class="nd3y8ieci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mobile-back-alt"} {...others} />);
}

export default Component;
