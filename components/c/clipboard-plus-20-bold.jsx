import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6t120hgc.css';
import '../../css/z/zln2gxb3r.css';
import '../../css/f/fq33uibus.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z6t120hgc"/><path class="zln2gxb3r"/><path class="fq33uibus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-plus-20-bold"} {...others} />);
}

export default Component;
