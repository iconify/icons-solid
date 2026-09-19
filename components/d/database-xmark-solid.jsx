import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aei0xrbup.css';
import '../../css/p/pl9_uwwwt.css';
import '../../css/j/j5_gj04sw.css';
import '../../css/e/en7mfccjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aei0xrbup"/><path clip-rule="evenodd" class="pl9_uwwwt"/><path clip-rule="evenodd" class="j5_gj04sw"/><path class="en7mfccjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-xmark-solid"} {...others} />);
}

export default Component;
