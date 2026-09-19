import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcl9tj99s.css';
import '../../css/w/wrjrr_5oa.css';
import '../../css/g/g35jkubnu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 vcl9tj99s"/><path class="clr-i-outline clr-i-outline-path-2 wrjrr_5oa"/><path class="clr-i-outline clr-i-outline-path-3 g35jkubnu"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:align-bottom-line"} {...others} />);
}

export default Component;
