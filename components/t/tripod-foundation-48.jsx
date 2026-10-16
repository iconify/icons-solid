import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwfk2yb5g.css';
import '../../css/g/gv016qb1u.css';
import '../../css/m/mhjsg5bjt.css';
import '../../css/l/ligxsu4bo.css';
import '../../css/y/y-445ob1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dwfk2yb5g"/><path class="gv016qb1u"/><path class="mhjsg5bjt"/><path class="ligxsu4bo"/><path class="y-445ob1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tripod-foundation-48"} {...others} />);
}

export default Component;
