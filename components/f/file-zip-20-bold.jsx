import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iccsyvk3j.css';
import '../../css/t/txn9u9tsj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iccsyvk3j"/><path class="txn9u9tsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-zip-20-bold"} {...others} />);
}

export default Component;
