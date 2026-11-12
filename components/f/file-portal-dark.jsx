import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6q28_uum.css';
import '../../css/d/d_om27bee.css';
import '../../css/v/vcwntabdx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b6q28_uum"/><path class="d_om27bee"/><path class="vcwntabdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:file-portal-dark"} {...others} />);
}

export default Component;
