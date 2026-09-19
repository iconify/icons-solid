import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9ho91v3n.css';
import '../../css/z/zeggah3kn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y9ho91v3n"/><path class="zeggah3kn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pharmacy-circled-cross"} {...others} />);
}

export default Component;
