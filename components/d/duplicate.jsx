import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urn_w85ht.css';
import '../../css/l/ldest115k.css';
import '../../css/n/n_64_tbsm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="urn_w85ht"/><path class="ldest115k"/><path class="n_64_tbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:duplicate"} {...others} />);
}

export default Component;
