import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vq6byr4cz.css';
import '../../css/r/rqobv64_l.css';
import '../../css/v/vbfg78blf.css';
import '../../css/o/ovpd07bcu.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vq6byr4cz"/><path class="rqobv64_l"/><path class="vbfg78blf"/><path class="ovpd07bcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:diamond-outline"} {...others} />);
}

export default Component;
