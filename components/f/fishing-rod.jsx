import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1fzgdbbw.css';
import '../../css/i/i0t4go5uh.css';
import '../../css/g/gtlg1gbvy.css';
import '../../css/h/hpgh56bjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="a1fzgdbbw"/><path class="i0t4go5uh"/><circle class="gtlg1gbvy"/><path class="hpgh56bjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fishing-rod"} {...others} />);
}

export default Component;
