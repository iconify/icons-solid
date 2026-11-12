import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgt426vre.css';
import '../../css/n/n9h5yebjh.css';
import '../../css/k/k_lrs8b-y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hgt426vre"/><path class="n9h5yebjh"/><path class="k_lrs8b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:steamgriddb-dark"} {...others} />);
}

export default Component;
