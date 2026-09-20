import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht7hwobsq.css';
import '../../css/j/jcrvz4t4p.css';
import '../../css/s/sspwmiz4a.css';
import '../../css/p/p0s3mvjfy.css';
import '../../css/u/uni2xfbvj.css';
import '../../css/b/batpup83n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ht7hwobsq"/><path class="jcrvz4t4p"/><path class="sspwmiz4a"/><path class="p0s3mvjfy"/><path class="uni2xfbvj"/><path class="batpup83n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:transfer-van"} {...others} />);
}

export default Component;
