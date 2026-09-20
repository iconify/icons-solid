import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bfa1p4bhy.css';
import '../../css/g/gwh11sb9x.css';
import '../../css/t/t6p2dab5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="bfa1p4bhy"/><path class="gwh11sb9x"/><path class="t6p2dab5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:badge-1"} {...others} />);
}

export default Component;
