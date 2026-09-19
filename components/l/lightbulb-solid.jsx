import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hql3ldhxa.css';
import '../../css/o/oynu9y2bq.css';
import '../../css/c/cxlln6pqv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 hql3ldhxa"/><path class="clr-i-solid clr-i-solid-path-2 oynu9y2bq"/><path class="clr-i-solid clr-i-solid-path-3 cxlln6pqv"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:lightbulb-solid"} {...others} />);
}

export default Component;
