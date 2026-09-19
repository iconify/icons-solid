import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uowg2d21o.css';
import '../../css/v/v7yzkqojp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uowg2d21o"/><path class="v7yzkqojp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-check-light"} {...others} />);
}

export default Component;
