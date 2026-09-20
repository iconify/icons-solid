import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx2mo8b7f.css';
import '../../css/b/bc7209bjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vx2mo8b7f"/><path class="bc7209bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:boson"} {...others} />);
}

export default Component;
