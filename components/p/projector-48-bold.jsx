import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab8fc_wvr.css';
import '../../css/z/zd05-xlem.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ab8fc_wvr"/><path class="zd05-xlem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:projector-48-bold"} {...others} />);
}

export default Component;
