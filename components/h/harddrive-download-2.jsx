import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/moq05mb-i.css';
import '../../css/a/a0mbibbru.css';
import '../../css/f/f_ibfg0zm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="moq05mb-i"/><path class="a0mbibbru"/><path class="f_ibfg0zm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:harddrive-download-2"} {...others} />);
}

export default Component;
