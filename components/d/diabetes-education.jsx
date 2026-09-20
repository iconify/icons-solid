import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_m6i_b2e.css';
import '../../css/x/x0zc1fb2j.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="n_m6i_b2e"/><path class="x0zc1fb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:diabetes-education"} {...others} />);
}

export default Component;
