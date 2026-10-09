import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmo52ol9d.css';
import '../../css/n/nvn445b8l.css';
import '../../css/z/zoo-ikbzp.css';
import '../../css/x/xieil5bgi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fmo52ol9d"/><path class="nvn445b8l"/><path class="zoo-ikbzp"/><path class="xieil5bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-table-48"} {...others} />);
}

export default Component;
