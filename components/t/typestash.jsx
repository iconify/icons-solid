import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ki9s1utoq.css';
import '../../css/d/da16a4bkk.css';
import '../../css/i/ieb391brm.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ki9s1utoq"/><path class="da16a4bkk"/><path class="ieb391brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typestash"} {...others} />);
}

export default Component;
