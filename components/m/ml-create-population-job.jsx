import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzorb_z0w.css';
import '../../css/s/slpzz11by.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rzorb_z0w"/><path class="ouiIcon__fillSecondary slpzz11by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:ml-create-population-job"} {...others} />);
}

export default Component;
