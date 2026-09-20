import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd66k8gvw.css';
import '../../css/g/gicdm3bbo.css';
import '../../css/u/ur8ujvb1d.css';
import '../../css/v/v9hsi0o4r.css';
import '../../css/k/kmmw1jwbq.css';
import '../../css/w/wmkw7db5n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jd66k8gvw"/><path class="gicdm3bbo"/><ellipse transform="rotate(-64.081 256.613 291.73)" class="ur8ujvb1d"/><ellipse transform="rotate(-55.257 301.259 217.89)" class="v9hsi0o4r"/><ellipse class="kmmw1jwbq"/><path class="wmkw7db5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:olivetin"} {...others} />);
}

export default Component;
