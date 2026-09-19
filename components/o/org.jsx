import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkfottbas.css';
import '../../css/c/c3z6yg-qu.css';
import '../../css/w/w2k4c4jrl.css';
import '../../css/j/j40lfpbca.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kkfottbas"/><path class="c3z6yg-qu"/><path class="w2k4c4jrl"/><path class="j40lfpbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:org"} {...others} />);
}

export default Component;
