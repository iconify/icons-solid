import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohvfq_b9q.css';
import '../../css/u/unyzohbzc.css';
import '../../css/d/da7mtxpgt.css';
import '../../css/t/twbet7beq.css';
import '../../css/e/eplmfnbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ohvfq_b9q"/><path class="unyzohbzc"/><path class="da7mtxpgt"/><path class="twbet7beq"/><path class="eplmfnbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:forest"} {...others} />);
}

export default Component;
