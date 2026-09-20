import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gg6ap8bon.css';
import '../../css/h/htt84wbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gg6ap8bon"/><path class="htt84wbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:location-pin-store"} {...others} />);
}

export default Component;
