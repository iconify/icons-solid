import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i5oofwb9h.css';
import '../../css/i/i5tsyvxih.css';
import '../../css/h/hdc8gxnie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i5oofwb9h"/><path class="i5tsyvxih"/><path class="hdc8gxnie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:backward-10-seconds"} {...others} />);
}

export default Component;
