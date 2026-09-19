import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoqqhwb4v.css';
import '../../css/c/cv4vh3bkr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xoqqhwb4v"/><path class="cv4vh3bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:warning"} {...others} />);
}

export default Component;
