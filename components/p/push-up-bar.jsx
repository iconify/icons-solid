import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u7upx2b1f.css';
import '../../css/t/t_rua5b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u7upx2b1f"/><path class="t_rua5b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:push-up-bar"} {...others} />);
}

export default Component;
