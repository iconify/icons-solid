import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt4lkgpbc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mt4lkgpbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:checklist"} {...others} />);
}

export default Component;
