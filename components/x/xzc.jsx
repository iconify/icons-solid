import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y6ks5jlxv.css';
import '../../css/a/a0ocguycj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="y6ks5jlxv"/><path class="a0ocguycj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xzc"} {...others} />);
}

export default Component;
