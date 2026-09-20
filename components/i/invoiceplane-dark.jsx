import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5yu1qb-n.css';
import '../../css/t/tmnoc9bjp.css';
import '../../css/z/zeq616bts.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k5yu1qb-n"/><path class="tmnoc9bjp"/><path class="zeq616bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoiceplane-dark"} {...others} />);
}

export default Component;
