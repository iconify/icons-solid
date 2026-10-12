import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jctuc0bqv.css';
import '../../css/p/pv55lpbwj.css';
import '../../css/e/e3xvblb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="jctuc0bqv"/><path class="pv55lpbwj"/><path class="e3xvblb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cashback"} {...others} />);
}

export default Component;
