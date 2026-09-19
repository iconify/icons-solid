import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rll17gssz.css';
import '../../css/k/kqk465kfy.css';
import '../../css/o/o52d4pben.css';
import '../../css/n/n3d7nbb7f.css';
import '../../css/x/xfjre4dkv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="rll17gssz"/><path class="kqk465kfy"/><path class="o52d4pben"/><path class="n3d7nbb7f"/><path class="xfjre4dkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chef-hat-one"} {...others} />);
}

export default Component;
