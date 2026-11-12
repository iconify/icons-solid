import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxqr4bbni.css';
import '../../css/f/f752_u1ed.css';
import '../../css/u/ungc_tbic.css';
import '../../css/j/jqdg6w_dd.css';
import '../../css/f/fdunp569o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yxqr4bbni"/><path class="f752_u1ed"/><path class="ungc_tbic"/><path class="jqdg6w_dd"/><path class="fdunp569o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wiki-js-light"} {...others} />);
}

export default Component;
