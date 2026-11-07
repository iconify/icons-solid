import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dm03gzbnp.css';
import '../../css/c/cdweb5b1o.css';
import '../../css/m/mtbem4pdc.css';
import '../../css/f/fqm-9ybin.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dm03gzbnp"/><path class="cdweb5b1o"/><path class="mtbem4pdc"/><path class="fqm-9ybin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-twice-square-bold-duotone"} {...others} />);
}

export default Component;
