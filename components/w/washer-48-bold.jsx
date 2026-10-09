import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml6m6q55w.css';
import '../../css/y/ybtkb5jlq.css';
import '../../css/o/o9f6xfbtl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ml6m6q55w"/><path class="ybtkb5jlq"/><path class="o9f6xfbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:washer-48-bold"} {...others} />);
}

export default Component;
