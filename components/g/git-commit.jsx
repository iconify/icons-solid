import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_v0rac2z.css';
import '../../css/t/tb3os1bjv.css';
import '../../css/t/t2_zssbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="e_v0rac2z"/><path class="tb3os1bjv"/><circle transform="rotate(90 12 12)" class="t2_zssbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-commit"} {...others} />);
}

export default Component;
