import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o_n2tjt8q.css';
import '../../css/h/he4saotgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="o_n2tjt8q"/><path class="he4saotgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:computer-ram"} {...others} />);
}

export default Component;
