import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7nhbzsmz.css';
import '../../css/v/v3v551bqy.css';
import '../../css/j/j94t_ebkm.css';
import '../../css/x/xzxjqabgl.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="e7nhbzsmz"/><path class="v3v551bqy"/><path class="j94t_ebkm"/><path class="xzxjqabgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:file"} {...others} />);
}

export default Component;
