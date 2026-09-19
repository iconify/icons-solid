import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l2jjs2ffj.css';
import '../../css/p/p0vug3o8r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="l2jjs2ffj"/><path class="p0vug3o8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bq"} {...others} />);
}

export default Component;
