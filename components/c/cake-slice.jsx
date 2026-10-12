import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9k1m0njm.css';
import '../../css/e/e49gycibs.css';
import '../../css/j/jka25y6xd.css';
import '../../css/v/v0o9i-r8z.css';
import '../../css/z/zzyf96b_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g9k1m0njm"/><circle transform="rotate(90 12.05 6.97)" class="e49gycibs"/><circle transform="rotate(90 11.82 6.97)" class="jka25y6xd"/><path class="v0o9i-r8z"/><path class="zzyf96b_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cake-slice"} {...others} />);
}

export default Component;
