import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjg8qor2a.css';
import '../../css/k/kyzz2cc9p.css';
import '../../css/l/l9lokr6ut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xjg8qor2a"/><path class="kyzz2cc9p"/><path class="l9lokr6ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-wrench-48-bold"} {...others} />);
}

export default Component;
