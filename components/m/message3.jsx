import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ibc6kieee.css';
import '../../css/p/ph66tfbtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ibc6kieee"/><path class="ph66tfbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message3"} {...others} />);
}

export default Component;
