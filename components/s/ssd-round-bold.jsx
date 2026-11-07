import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7w7r-bld.css';
import '../../css/d/dcs6u0bix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x7w7r-bld"/><path clip-rule="evenodd" class="dcs6u0bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ssd-round-bold"} {...others} />);
}

export default Component;
