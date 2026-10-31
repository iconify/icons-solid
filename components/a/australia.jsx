import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl8x224tx.css';
import '../../css/w/ww52sv46j.css';
import '../../css/n/nv4ztabcc.css';
import '../../css/o/o6rwwebbc.css';
import '../../css/u/ufzh-1jpi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="yl8x224tx"/><path class="ww52sv46j"/><path class="nv4ztabcc"/><path class="o6rwwebbc"/><path class="ufzh-1jpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:australia"} {...others} />);
}

export default Component;
