import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsl13cc9p.css';
import '../../css/g/ge_sk5bnq.css';
import '../../css/j/jqq-j9bdc.css';
import '../../css/s/sj71gtfbi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bsl13cc9p"/><path clip-rule="evenodd" class="ge_sk5bnq"/><path class="jqq-j9bdc"/><path class="sj71gtfbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-list-4"} {...others} />);
}

export default Component;
