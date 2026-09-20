import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dkpkw8zuq.css';
import '../../css/f/frf11g9hn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dkpkw8zuq"/><path class="frf11g9hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hide-layer"} {...others} />);
}

export default Component;
