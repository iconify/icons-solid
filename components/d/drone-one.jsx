import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zxrl963_d.css';
import '../../css/s/s9x2bcctb.css';
import '../../css/z/zsoo0z6zu.css';
import '../../css/b/b_zoysbpp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zxrl963_d"/><path class="s9x2bcctb"/><path class="zsoo0z6zu"/><path class="b_zoysbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:drone-one"} {...others} />);
}

export default Component;
