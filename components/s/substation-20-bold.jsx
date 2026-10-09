import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gikhi2gcs.css';
import '../../css/v/v10bzbf9m.css';
import '../../css/i/iw3d79bxh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gikhi2gcs"/><path class="v10bzbf9m"/><path class="iw3d79bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:substation-20-bold"} {...others} />);
}

export default Component;
