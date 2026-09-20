import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxd2ugikm.css';
import '../../css/v/vhi06qdng.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zxd2ugikm"/><path class="vhi06qdng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:zoom-horizontal-16"} {...others} />);
}

export default Component;
