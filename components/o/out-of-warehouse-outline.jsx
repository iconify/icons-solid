import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mee7l434j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mee7l434j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:out-of-warehouse-outline"} {...others} />);
}

export default Component;
