import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7ml1bbhq.css';
import '../../css/k/k08isbc9y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t7ml1bbhq"/><path class="k08isbc9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cobalt"} {...others} />);
}

export default Component;
