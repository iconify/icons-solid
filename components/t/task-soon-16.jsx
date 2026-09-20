import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdrw_-bzd.css';
import '../../css/m/m0a6ogbci.css';
import '../../css/d/deo436eby.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fdrw_-bzd"/><path class="m0a6ogbci"/><path clip-rule="evenodd" class="deo436eby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:task-soon-16"} {...others} />);
}

export default Component;
