import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hubnyacig.css';
import '../../css/n/nsgvqc0vm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hubnyacig"/><path class="nsgvqc0vm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-48"} {...others} />);
}

export default Component;
