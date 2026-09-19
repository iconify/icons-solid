import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo1k5b-e.css';
import '../../css/n/nlqvrrg1h.css';
import '../../css/n/nniesdbig.css';
import '../../css/j/jaw_f2b3d.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="sfo1k5b-e"/><path class="nlqvrrg1h"/><path class="nniesdbig"/><path class="jaw_f2b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:paypal"} {...others} />);
}

export default Component;
