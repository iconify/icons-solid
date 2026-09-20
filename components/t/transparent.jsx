import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-_w7g1rt.css';
import '../../css/e/emt3dcw1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a-_w7g1rt"/><path class="emt3dcw1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:transparent"} {...others} />);
}

export default Component;
