import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmbrbipep.css';
import '../../css/b/bcr477b8x.css';
import '../../css/b/bp242uqss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-outline clr-i-outline-path-1 cmbrbipep"/><path class="bcr477b8x clr-i-outline clr-i-outline-path-2"/><path class="bp242uqss clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:error-standard-line"} {...others} />);
}

export default Component;
