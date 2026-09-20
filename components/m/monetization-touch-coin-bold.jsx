import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk1yoeo-c.css';
import '../../css/i/i31-_h-xy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fk1yoeo-c"/><path class="i31-_h-xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monetization-touch-coin-bold"} {...others} />);
}

export default Component;
