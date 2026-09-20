import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/t1p-_avbx.css';
import '../../css/j/j5sy6dofk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="t1p-_avbx"/><path class="j5sy6dofk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cloud-flash"} {...others} />);
}

export default Component;
