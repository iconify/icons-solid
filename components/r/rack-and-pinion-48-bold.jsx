import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8spygx2w.css';
import '../../css/f/fkn2szbqo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a8spygx2w"/><path class="fkn2szbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rack-and-pinion-48-bold"} {...others} />);
}

export default Component;
