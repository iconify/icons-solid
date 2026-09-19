import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko-_e_tll.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ko-_e_tll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:small-plane"} {...others} />);
}

export default Component;
