import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t73xq5ncc.css';
import '../../css/v/v2py68bzc.css';
import '../../css/p/pbzz1jk3o.css';
import '../../css/e/ez80zy7ri.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t73xq5ncc"/><path class="v2py68bzc"/><path class="pbzz1jk3o"/><path class="ez80zy7ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-stats"} {...others} />);
}

export default Component;
