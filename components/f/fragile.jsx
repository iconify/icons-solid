import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n7sugib3z.css';
import '../../css/u/urd-96jth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n7sugib3z"/><path class="urd-96jth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:fragile"} {...others} />);
}

export default Component;
