import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-brm0byh.css';
import '../../css/b/bj5taw8na.css';
import '../../css/s/sfrze3jxm.css';
import '../../css/i/i1z64bwjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y-brm0byh"/><path class="bj5taw8na"/><circle class="sfrze3jxm"/><path class="i1z64bwjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-settings"} {...others} />);
}

export default Component;
