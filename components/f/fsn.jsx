import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ekj00mz3x.css';
import '../../css/v/vzcrb8non.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ekj00mz3x"/><path class="vzcrb8non"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:fsn"} {...others} />);
}

export default Component;
