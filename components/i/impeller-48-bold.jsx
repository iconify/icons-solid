import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moyoz5fkv.css';
import '../../css/f/fe7lf8b9s.css';
import '../../css/m/mnxar28sx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="moyoz5fkv"/><path class="fe7lf8b9s"/><path class="mnxar28sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:impeller-48-bold"} {...others} />);
}

export default Component;
