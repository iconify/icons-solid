import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a56-dwb2v.css';
import '../../css/b/bsquanb2q.css';
import '../../css/d/dtkzsnbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a56-dwb2v"/><path class="bsquanb2q"/><path class="dtkzsnbie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card-transfer"} {...others} />);
}

export default Component;
