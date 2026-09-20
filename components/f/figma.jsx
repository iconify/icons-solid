import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9d36vgse.css';
import '../../css/o/oxkfxll7r.css';
import '../../css/q/qozean2np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v9d36vgse"/><path class="oxkfxll7r"/><path class="qozean2np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:figma"} {...others} />);
}

export default Component;
