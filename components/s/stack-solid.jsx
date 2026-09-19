import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex0eq3b5x.css';
import '../../css/d/dogo5nsjx.css';
import '../../css/z/zmc-ojbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ex0eq3b5x"/><path class="dogo5nsjx"/><path class="zmc-ojbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:stack-solid"} {...others} />);
}

export default Component;
