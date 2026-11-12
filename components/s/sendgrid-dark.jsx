import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6wtytb_v.css';
import '../../css/p/phf4gf3fs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i6wtytb_v"/><path class="phf4gf3fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sendgrid-dark"} {...others} />);
}

export default Component;
