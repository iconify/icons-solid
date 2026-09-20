import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey75k4bkr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ey75k4bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:penn-state-nittany-lions-light"} {...others} />);
}

export default Component;
