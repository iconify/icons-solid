import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwpo4xbeq.css';
import '../../css/o/ofc_1ckbo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lwpo4xbeq"/><path class="ofc_1ckbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rauthy"} {...others} />);
}

export default Component;
