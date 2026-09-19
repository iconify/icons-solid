import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qkjx3xb9z.css';
import '../../css/u/ubb-9yben.css';
import '../../css/g/g4p3ogb_y.css';
import '../../css/w/wk9qljb9h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="qkjx3xb9z"/><path class="ubb-9yben"/><path class="g4p3ogb_y"/><path class="wk9qljb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:branch"} {...others} />);
}

export default Component;
