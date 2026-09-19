import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gifnzwbsx.css';
import '../../css/g/gsg7zl33p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gifnzwbsx"/><path class="gsg7zl33p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:user-crown"} {...others} />);
}

export default Component;
