import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kx4yw6bbs.css';
import '../../css/b/biy3-gf5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kx4yw6bbs"/><path class="biy3-gf5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:sidebar-expand"} {...others} />);
}

export default Component;
