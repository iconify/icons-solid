import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-8yzyb5a.css';
import '../../css/j/jy7k-3hfv.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="e-8yzyb5a"/><path class="jy7k-3hfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-emergency"} {...others} />);
}

export default Component;
