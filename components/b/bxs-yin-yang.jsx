import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj5vjvkzr.css';
import '../../css/b/b12gxvr_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj5vjvkzr"/><circle class="b12gxvr_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-yin-yang"} {...others} />);
}

export default Component;
