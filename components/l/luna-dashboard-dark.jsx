import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbp06qb8h.css';
import '../../css/h/hpzn55bhk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rbp06qb8h"/><path class="hpzn55bhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:luna-dashboard-dark"} {...others} />);
}

export default Component;
