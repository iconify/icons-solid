import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu410db3i.css';
import '../../css/v/vod9qb7fk.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="mu410db3i"/><path class="vod9qb7fk"/><path class="uaycyrbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:control-lun-solid-alerted"} {...others} />);
}

export default Component;
