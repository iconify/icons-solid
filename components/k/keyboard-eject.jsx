import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dqskufrys.css';
import '../../css/f/f4dq2su0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dqskufrys"/><path class="f4dq2su0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyboard-eject"} {...others} />);
}

export default Component;
