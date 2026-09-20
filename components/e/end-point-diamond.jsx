import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/o6oexibok.css';
import '../../css/u/uhh5hfjxu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="o6oexibok"/><path class="uhh5hfjxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:end-point-diamond"} {...others} />);
}

export default Component;
