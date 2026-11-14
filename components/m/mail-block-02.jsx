import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c9ult2btp.css';
import '../../css/q/qdzi_jzoh.css';
import '../../css/g/ggell_ipy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c9ult2btp"/><path class="qdzi_jzoh"/><path class="ggell_ipy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-block-02"} {...others} />);
}

export default Component;
