import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsdbu57tf.css';
import '../../css/r/rz0vntz2v.css';
import '../../css/s/soc2sjb8d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xsdbu57tf"/><path class="rz0vntz2v"/><path class="soc2sjb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kamiyomu"} {...others} />);
}

export default Component;
