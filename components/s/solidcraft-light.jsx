import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyt5mjbab.css';
import '../../css/x/xr2-xybln.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lyt5mjbab"/><path class="xr2-xybln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:solidcraft-light"} {...others} />);
}

export default Component;
