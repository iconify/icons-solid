import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f4h9_zbfp.css';
import '../../css/g/gqujsbciq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f4h9_zbfp"/><path class="gqujsbciq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-dots-check"} {...others} />);
}

export default Component;
