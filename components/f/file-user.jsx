import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c73e0yd1g.css';
import '../../css/s/s-37tkb2d.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c73e0yd1g"/><path class="s-37tkb2d"/><path class="ykzxdyblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-user"} {...others} />);
}

export default Component;
