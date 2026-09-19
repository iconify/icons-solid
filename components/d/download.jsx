import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdf4m1b4v.css';
import '../../css/e/e3rrscc8a.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="mdf4m1b4v"/><path class="e3rrscc8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:download"} {...others} />);
}

export default Component;
