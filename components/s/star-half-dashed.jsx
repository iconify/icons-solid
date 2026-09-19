import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cxi5-xbye.css';
import '../../css/w/w7wjwfnme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cxi5-xbye"/><path class="w7wjwfnme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:star-half-dashed"} {...others} />);
}

export default Component;
