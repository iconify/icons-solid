import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me_5zkbyf.css';
import '../../css/u/ufikoxbls.css';
import '../../css/b/b2o8jac-d.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 me_5zkbyf"/><circle class="clr-i-outline clr-i-outline-path-2 ufikoxbls"/><circle class="b2o8jac-d clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:ellipsis-horizontal-line"} {...others} />);
}

export default Component;
