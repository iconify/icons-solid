import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f9dl4cp1x.css';
import '../../css/o/o0x85ub0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="f9dl4cp1x"/><path class="o0x85ub0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cat-2"} {...others} />);
}

export default Component;
