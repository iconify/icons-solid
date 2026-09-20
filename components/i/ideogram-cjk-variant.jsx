import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw6w3b36x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hw6w3b36x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ideogram-cjk-variant"} {...others} />);
}

export default Component;
