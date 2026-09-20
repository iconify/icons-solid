import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rc4sg3owt.css';
import '../../css/i/i5tsyvxih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rc4sg3owt"/><path class="i5tsyvxih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:backward-5-seconds"} {...others} />);
}

export default Component;
