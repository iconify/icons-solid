import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rl6wtq2mk.css';
import '../../css/g/gtz0pnw7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rl6wtq2mk"/><path class="gtz0pnw7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:git-merge"} {...others} />);
}

export default Component;
