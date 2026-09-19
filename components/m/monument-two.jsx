import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jil8u0uzb.css';
import '../../css/p/pmfa-2b0d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="jil8u0uzb"/><path class="pmfa-2b0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monument-two"} {...others} />);
}

export default Component;
