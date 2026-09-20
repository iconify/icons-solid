import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bumpl1bqw.css';
import '../../css/h/hosfmobjb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bumpl1bqw"/><path class="hosfmobjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:receipt-wrangler"} {...others} />);
}

export default Component;
