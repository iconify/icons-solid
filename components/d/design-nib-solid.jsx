import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qio0mzbqg.css';
import '../../css/y/yt5yh63nn.css';
import '../../css/e/e_5uv8bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qio0mzbqg"/><path class="yt5yh63nn"/><path class="e_5uv8bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:design-nib-solid"} {...others} />);
}

export default Component;
