import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12ji_bzg.css';
import '../../css/o/omkt5tb6l.css';
import '../../css/b/bbvrevbek.css';
import '../../css/e/eepb1yo7q.css';
import '../../css/t/tund_j90b.css';
import '../../css/s/s_3e4tbqh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i12ji_bzg"/><path class="omkt5tb6l"/><path class="bbvrevbek"/><path class="eepb1yo7q"/><path class="tund_j90b"/><path class="s_3e4tbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-fastlane-open"} {...others} />);
}

export default Component;
