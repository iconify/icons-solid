import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/res45y0_a.css';
import '../../css/b/b-cf_z2lm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="res45y0_a"/><path class="b-cf_z2lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:temp-high"} {...others} />);
}

export default Component;
