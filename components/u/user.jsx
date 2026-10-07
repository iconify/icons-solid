import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r69eunb6m.css';
import '../../css/g/gifnzwbsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r69eunb6m"/><path class="gifnzwbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user"} {...others} />);
}

export default Component;
