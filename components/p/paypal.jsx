import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t90i62flf.css';
import '../../css/r/re_renben.css';
import '../../css/a/aw5f0f-8s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t90i62flf"/><path class="re_renben"/><path class="aw5f0f-8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:paypal"} {...others} />);
}

export default Component;
