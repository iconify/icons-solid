import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzr4cpspt.css';
import '../../css/o/o_ytb5bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lzr4cpspt"/><path class="o_ytb5bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sailboat"} {...others} />);
}

export default Component;
