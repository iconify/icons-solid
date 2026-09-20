import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y2rzy0ntd.css';
import '../../css/b/bti7ibcst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y2rzy0ntd"/><path class="bti7ibcst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:startup"} {...others} />);
}

export default Component;
