import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajvc1_b-l.css';
import '../../css/u/unwic5qnb.css';
import '../../css/b/bj2guyupp.css';
import '../../css/j/jqdg6w_dd.css';
import '../../css/d/dttu61bfx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ajvc1_b-l"/><path class="unwic5qnb"/><path class="bj2guyupp"/><path class="jqdg6w_dd"/><path class="dttu61bfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wiki-js-light"} {...others} />);
}

export default Component;
