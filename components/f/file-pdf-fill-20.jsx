import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx1xifj3g.css';
import '../../css/y/yzu-9rb_k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cx1xifj3g"/><path class="yzu-9rb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-pdf-fill-20"} {...others} />);
}

export default Component;
