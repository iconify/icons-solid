import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zp9e8lzjd.css';
import '../../css/x/xnw6e-b9l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="zp9e8lzjd"/><path class="xnw6e-b9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:gbp"} {...others} />);
}

export default Component;
