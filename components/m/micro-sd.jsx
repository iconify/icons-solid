import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lceuthzyh.css';
import '../../css/b/b3k15qlvh.css';
import '../../css/y/yfb-08php.css';
import '../../css/u/u6av8yx7x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="lceuthzyh"/><path class="b3k15qlvh"/><path class="yfb-08php"/><path class="u6av8yx7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:micro-sd"} {...others} />);
}

export default Component;
