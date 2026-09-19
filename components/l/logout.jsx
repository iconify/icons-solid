import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi0-5pbvt.css';
import '../../css/z/z6nnhfbxd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bi0-5pbvt"/><path class="z6nnhfbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logout"} {...others} />);
}

export default Component;
