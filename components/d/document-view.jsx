import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgmhddevn.css';
import '../../css/b/b-_0m7wwh.css';
import '../../css/u/ueg81y61d.css';
import '../../css/v/v0akf7b5v.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="lgmhddevn"/><path class="b-_0m7wwh"/><path class="ueg81y61d"/><path class="v0akf7b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-view"} {...others} />);
}

export default Component;
