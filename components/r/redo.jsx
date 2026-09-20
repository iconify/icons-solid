import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruxg_8bkz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ruxg_8bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:redo"} {...others} />);
}

export default Component;
