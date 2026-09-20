import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9tsge_gb.css';
import '../../css/h/h6ao34een.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9tsge_gb"/><path class="h6ao34een"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:esphome"} {...others} />);
}

export default Component;
