import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k44k9dbgn.css';
import '../../css/z/zqqnr6bwj.css';
import '../../css/p/piddrd77s.css';
import '../../css/o/o7olhjb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="k44k9dbgn"/><path class="zqqnr6bwj"/><path class="piddrd77s"/><path class="o7olhjb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:bank-notes-stack"} {...others} />);
}

export default Component;
