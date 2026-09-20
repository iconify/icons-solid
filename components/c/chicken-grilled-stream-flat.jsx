import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6v75b2-j.css';
import '../../css/n/nb1e76c9o.css';
import '../../css/m/m7inagr1t.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n6v75b2-j"/><path class="nb1e76c9o"/><path class="m7inagr1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chicken-grilled-stream-flat"} {...others} />);
}

export default Component;
