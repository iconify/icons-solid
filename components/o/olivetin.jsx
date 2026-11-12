import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd66k8gvw.css';
import '../../css/g/gicdm3bbo.css';
import '../../css/d/dlmbedbiz.css';
import '../../css/t/t8ab0ebix.css';
import '../../css/k/kmmw1jwbq.css';
import '../../css/w/wmkw7db5n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jd66k8gvw"/><path class="gicdm3bbo"/><path class="dlmbedbiz"/><path class="t8ab0ebix"/><ellipse class="kmmw1jwbq"/><path class="wmkw7db5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:olivetin"} {...others} />);
}

export default Component;
