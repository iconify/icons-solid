import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d05zlbb9a.css';
import '../../css/r/rx-9rn84i.css';
import '../../css/u/uvi4e24wd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 d05zlbb9a"/><circle class="clr-i-outline clr-i-outline-path-2 rx-9rn84i"/><path class="clr-i-outline clr-i-outline-path-3 uvi4e24wd"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:warning-line"} {...others} />);
}

export default Component;
