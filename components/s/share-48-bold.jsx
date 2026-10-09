import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob6rb5b4d.css';
import '../../css/g/g620y8-kq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ob6rb5b4d"/><path class="g620y8-kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-48-bold"} {...others} />);
}

export default Component;
