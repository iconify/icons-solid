import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zs47c3big.css';
import '../../css/c/caa5pt7fn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zs47c3big"/><path class="caa5pt7fn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:double-bookmark"} {...others} />);
}

export default Component;
