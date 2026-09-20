import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ietqz2zmb.css';
import '../../css/h/hr1wf2yng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ietqz2zmb"/><path class="hr1wf2yng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-one-pin-plane"} {...others} />);
}

export default Component;
