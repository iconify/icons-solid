import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp3dqrq0z.css';
import '../../css/n/n2chocc_t.css';
import '../../css/k/k5zk9i-us.css';
import '../../css/z/z1nm9ccxf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wp3dqrq0z"/><path class="n2chocc_t"/><path clip-rule="evenodd" class="k5zk9i-us"/><path class="z1nm9ccxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-singer"} {...others} />);
}

export default Component;
