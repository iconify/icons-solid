import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is0p9ccdm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="is0p9ccdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:siyuan-light"} {...others} />);
}

export default Component;
