import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_c4xabtr.css';
import '../../css/t/t9axjb05q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a_c4xabtr"/><path class="t9axjb05q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:part-definition"} {...others} />);
}

export default Component;
