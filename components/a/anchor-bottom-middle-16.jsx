import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2j83rzjf.css';
import '../../css/n/nwxojzbqn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v2j83rzjf"/><path class="nwxojzbqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:anchor-bottom-middle-16"} {...others} />);
}

export default Component;
