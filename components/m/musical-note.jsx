import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpsiiab0r.css';
import '../../css/r/r98nezm1k.css';
import '../../css/k/kom3y6h0l.css';
import '../../css/i/i42h6db8h.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/z9f0aka7j.css';
import '../../css/c/cvccq_6uu.css';
import '../../css/k/kkqqr9nff.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="dpsiiab0r"><path class="r98nezm1k"/><circle class="kom3y6h0l"/><circle class="i42h6db8h"/></g><g class="ij2x_72vy"><path class="z9f0aka7j"/><circle class="kom3y6h0l"/><path class="cvccq_6uu"/><circle class="i42h6db8h"/><path class="kkqqr9nff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:musical-note"} {...others} />);
}

export default Component;
