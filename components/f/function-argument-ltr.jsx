import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caf4w40kg.css';
import '../../css/v/vqmcn9mpk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="caf4w40kg"/><path class="vqmcn9mpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:function-argument-ltr"} {...others} />);
}

export default Component;
