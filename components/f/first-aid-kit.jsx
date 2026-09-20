import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nsj1q8bmg.css';
import '../../css/j/j0o9o7qli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nsj1q8bmg"/><path class="j0o9o7qli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:first-aid-kit"} {...others} />);
}

export default Component;
