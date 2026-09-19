import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/n0f-nfx6t.css';
import '../../css/u/ujo-o7bxq.css';
import '../../css/j/jil8u0uzb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="n0f-nfx6t"/><path class="ujo-o7bxq"/><path class="jil8u0uzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monument-one"} {...others} />);
}

export default Component;
