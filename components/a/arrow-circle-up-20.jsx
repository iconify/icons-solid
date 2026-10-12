import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/z/zg9pvrb4y.css';
import '../../css/c/c6azuibpb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="zg9pvrb4y"/><path class="c6azuibpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-circle-up-20"} {...others} />);
}

export default Component;
