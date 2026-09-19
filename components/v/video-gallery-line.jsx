import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1bi21wia.css';
import '../../css/b/bcpzljbeb.css';
import '../../css/j/jn9mjsb2g.css';
import '../../css/f/fpl1ybcvl.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 m1bi21wia"/><path class="bcpzljbeb clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 jn9mjsb2g"/><path class="clr-i-outline clr-i-outline-path-4 fpl1ybcvl"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:video-gallery-line"} {...others} />);
}

export default Component;
