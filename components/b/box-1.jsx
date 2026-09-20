import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/u5w688b7l.css';
import '../../css/x/x082-8cvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="u5w688b7l"/><path class="x082-8cvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:box-1"} {...others} />);
}

export default Component;
