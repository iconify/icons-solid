import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaqgtyjjh.css';
import '../../css/s/sthll3b2o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kaqgtyjjh"/><path class="sthll3b2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:autocaliweb"} {...others} />);
}

export default Component;
