import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drphl9x-c.css';
import '../../css/q/q6evf3_3i.css';
import '../../css/a/a8z3xdbuh.css';
import '../../css/n/n3fso8b_j.css';
import '../../css/a/ay8131wny.css';
import '../../css/a/aqkjjjv3w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="drphl9x-c"/><path class="q6evf3_3i"/><path class="a8z3xdbuh"/><path class="n3fso8b_j"/><circle class="ay8131wny"/><path class="aqkjjjv3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:blue-book"} {...others} />);
}

export default Component;
