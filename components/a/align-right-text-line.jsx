import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei-kxnb9i.css';
import '../../css/r/rioydob1q.css';
import '../../css/h/h4ef1jbpc.css';
import '../../css/y/y6gq97-6a.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ei-kxnb9i"/><path class="clr-i-outline clr-i-outline-path-2 rioydob1q"/><path class="clr-i-outline clr-i-outline-path-3 h4ef1jbpc"/><path class="clr-i-outline clr-i-outline-path-4 y6gq97-6a"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:align-right-text-line"} {...others} />);
}

export default Component;
