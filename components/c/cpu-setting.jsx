import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ak0rcjbsu.css';
import '../../css/v/v2z-67h7w.css';
import '../../css/u/urmy35bvg.css';
import '../../css/l/l8pepzbhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ak0rcjbsu"/><path class="v2z-67h7w"/><path class="urmy35bvg"/><path class="l8pepzbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cpu-setting"} {...others} />);
}

export default Component;
