import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_jrrob8i.css';
import '../../css/r/rkiah-7xt.css';
import '../../css/s/seuct6_2l.css';
import '../../css/l/lpi15s3xt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_jrrob8i"/><path class="rkiah-7xt"/><path class="seuct6_2l"/><path class="lpi15s3xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radicle"} {...others} />);
}

export default Component;
