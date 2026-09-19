import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvc83c0wf.css';
import '../../css/c/cmb79xb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dvc83c0wf"/><path class="cmb79xb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:radius"} {...others} />);
}

export default Component;
