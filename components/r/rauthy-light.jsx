import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0dz0lbab.css';
import '../../css/c/c8p6lwb2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u0dz0lbab"/><path class="c8p6lwb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rauthy-light"} {...others} />);
}

export default Component;
