import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to1fjxbbk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="to1fjxbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:ellipsis"} {...others} />);
}

export default Component;
