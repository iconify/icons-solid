import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnlnjbcmb.css';
import '../../css/e/exdnk9b2b.css';
import '../../css/z/z1jg2ibea.css';
import '../../css/j/jiqf9lbqx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mnlnjbcmb"/><path class="exdnk9b2b"/><path class="z1jg2ibea"/><path class="jiqf9lbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:save-annotation"} {...others} />);
}

export default Component;
