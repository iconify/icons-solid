import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pz4a6t63l.css';
import '../../css/h/h4-__3b9e.css';
import '../../css/j/j2qre1brj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pz4a6t63l"/><path class="h4-__3b9e"/><path class="j2qre1brj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bin-add"} {...others} />);
}

export default Component;
