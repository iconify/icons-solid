import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gb_tgqb6j.css';
import '../../css/j/j_2lxgbmt.css';
import '../../css/b/b2x3fgbfa.css';
import '../../css/j/jil8u0uzb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="gb_tgqb6j"/><rect class="j_2lxgbmt"/><rect class="b2x3fgbfa"/><path class="jil8u0uzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tower"} {...others} />);
}

export default Component;
