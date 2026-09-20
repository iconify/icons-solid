import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyye1n_ow.css';
import '../../css/m/mkgj1odis.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kyye1n_ow"/><path class="mkgj1odis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reclaimerr-dark"} {...others} />);
}

export default Component;
