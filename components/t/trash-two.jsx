import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cy6f5nbbw.css';
import '../../css/j/jkdgcnbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cy6f5nbbw"/><path class="jkdgcnbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:trash-two"} {...others} />);
}

export default Component;
