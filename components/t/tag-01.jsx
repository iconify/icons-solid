import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fxa6b0bfl.css';
import '../../css/r/r6hv7bc9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fxa6b0bfl"/><path class="r6hv7bc9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tag-01"} {...others} />);
}

export default Component;
