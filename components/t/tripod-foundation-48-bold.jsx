import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oov8pib4i.css';
import '../../css/i/ieixs4hsi.css';
import '../../css/v/vi7-jr65m.css';
import '../../css/x/xcc9jibon.css';
import '../../css/h/h2w2gxl4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oov8pib4i"/><path class="ieixs4hsi"/><path class="vi7-jr65m"/><path class="xcc9jibon"/><path class="h2w2gxl4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tripod-foundation-48-bold"} {...others} />);
}

export default Component;
