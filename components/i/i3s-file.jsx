import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b25ykvr-y.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/y/y1g_73byz.css';
import '../../css/s/sdd9u_bsu.css';
import '../../css/l/l9c08fbua.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="b25ykvr-y"/><path class="jqc7hmb-f"/><path class="y1g_73byz"/><path class="sdd9u_bsu"/><path class="l9c08fbua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:i3s-file"} {...others} />);
}

export default Component;
