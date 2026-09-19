import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp6fzabyy.css';
import '../../css/n/nph7vibnr.css';
import '../../css/x/xnq8w68sz.css';
import '../../css/g/grxh9gs-s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jp6fzabyy"/><path class="nph7vibnr"/><circle class="xnq8w68sz"/><path class="grxh9gs-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:clapperboard"} {...others} />);
}

export default Component;
