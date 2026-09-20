import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no_cqmfti.css';
import '../../css/c/cmsj9noho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="no_cqmfti"/><path class="cmsj9noho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cachyos-dark"} {...others} />);
}

export default Component;
