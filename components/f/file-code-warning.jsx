import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvndjrb_u.css';
import '../../css/w/w6icf_-vi.css';
import '../../css/e/e37miojtp.css';
import '../../css/p/pryqdebtt.css';
import '../../css/b/bwct2rbwr.css';
import '../../css/u/u6yq9yh5l.css';
import '../../css/w/w2_xi1bnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zvndjrb_u"/><path class="w6icf_-vi"/><path class="e37miojtp"/><path class="pryqdebtt"/><path class="bwct2rbwr"/><path class="u6yq9yh5l"/><path class="w2_xi1bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-code-warning"} {...others} />);
}

export default Component;
