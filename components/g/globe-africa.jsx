import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3n348bsq.css';
import '../../css/r/rh2mivbrm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3n348bsq"/><path class="rh2mivbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:globe-africa"} {...others} />);
}

export default Component;
