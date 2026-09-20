import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sducl6b4p.css';
import '../../css/r/rvcp9fbuk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sducl6b4p"/><path class="rvcp9fbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snapmaker"} {...others} />);
}

export default Component;
