import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb8flhcid.css';
import '../../css/d/dd0hmgdze.css';
import '../../css/j/jaycibc_p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qb8flhcid"/><path class="dd0hmgdze"/><path class="jaycibc_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biodiversity-20-bold"} {...others} />);
}

export default Component;
