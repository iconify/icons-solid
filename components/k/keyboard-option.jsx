import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n2b9j-zbo.css';
import '../../css/r/rcck58btd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n2b9j-zbo"/><path class="rcck58btd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyboard-option"} {...others} />);
}

export default Component;
