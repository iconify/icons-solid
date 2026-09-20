import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrrnwgbhy.css';
import '../../css/o/od1iqpboh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zrrnwgbhy"/><path class="od1iqpboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:image-layout-frame"} {...others} />);
}

export default Component;
