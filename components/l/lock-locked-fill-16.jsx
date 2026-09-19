import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blynalbvu.css';
import '../../css/n/n0vzj_b5e.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="blynalbvu"/><path class="n0vzj_b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-locked-fill-16"} {...others} />);
}

export default Component;
