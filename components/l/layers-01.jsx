import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji5xzhb-u.css';
import '../../css/v/vdsbdxbte.css';
import '../../css/b/bo29tlpqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ji5xzhb-u"/><path class="vdsbdxbte"/><path class="bo29tlpqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layers-01"} {...others} />);
}

export default Component;
