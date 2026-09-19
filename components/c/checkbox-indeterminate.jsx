import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mptj2mbio.css';
import '../../css/w/w2nbqq6me.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mptj2mbio"/><path class="w2nbqq6me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:checkbox-indeterminate"} {...others} />);
}

export default Component;
