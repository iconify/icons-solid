import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c6ov3abct.css';
import '../../css/f/f3edoy8ki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="c6ov3abct"/><path class="f3edoy8ki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:printer-3"} {...others} />);
}

export default Component;
