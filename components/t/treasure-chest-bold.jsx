import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4wjecb2i.css';
import '../../css/i/ipe7-acuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4wjecb2i"/><path class="ipe7-acuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:treasure-chest-bold"} {...others} />);
}

export default Component;
