import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orvizdb2o.css';
import '../../css/h/hluiizbfv.css';
import '../../css/b/b0n25wb5s.css';
import '../../css/i/i1sd5pehr.css';
import '../../css/v/v0ka02b9c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="orvizdb2o"/><path class="hluiizbfv"/><path class="b0n25wb5s"/><path class="i1sd5pehr"/><path class="v0ka02b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:statcom-48-bold"} {...others} />);
}

export default Component;
